import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TreeService } from 'src/app/core/tree/tree.service';
import { GroupService } from 'src/app/core/group/group.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css', '../../shared/style/style.css']
})
export class GroupEditComponent implements OnInit {

  private id: string;
  public trees = [];
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', []),
    trees: new FormControl([], [])
  });

  constructor(
    private treeService: TreeService,
    private groupService: GroupService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.groupService.get(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
          this.id = res._id;
          this.form.controls['name'].setValue(res.name);
          this.form.controls['description'].setValue(res.description);
          this.form.controls['trees'].setValue(res.trees);
          this.updateSelect();
      });

    this.treeService.getAll().subscribe(res => {
      this.trees = res;
      this.updateSelect();
    });
  }

  public submitForm() {
    if (this.form.valid) {
      this.groupService.edit(
        this.id,
      {
        name: this.form.controls['name'].value,
        description: this.form.controls['description'].value,
        trees: this.form.controls['trees'].value
      }).subscribe(res => {
        this.toastr.success('Grupo editado com sucesso!');
        this.router.navigate([`/grupos/${this.id}`]);
      }, err => {
        this.toastr.error(JSON.stringify(err));
      })
    } else {
      this.toastr.error('Formulário inválido.')
    }
  }

  private updateSelect() {
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    });
  }

}
