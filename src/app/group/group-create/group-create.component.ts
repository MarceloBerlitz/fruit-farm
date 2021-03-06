import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GroupService } from 'src/app/core/group/group.service';
import { TreeService } from 'src/app/core/tree/tree.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css', '../../shared/style/style.css']
})
export class GroupCreateComponent implements OnInit {

  public trees = [];
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', []),
    trees: new FormControl([], [])
  });

  constructor(
    private router: Router,
    private treeService: TreeService,
    private groupService: GroupService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.treeService.getAll().subscribe(res => {
      this.trees = res;
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      })
    });
  }

  public submitForm() {
    if (this.form.valid) {
      this.groupService.create({
        name: this.form.controls['name'].value,
        description: this.form.controls['description'].value,
        trees: this.form.controls['trees'].value
      }).subscribe(res => {
        this.toastr.success('Grupo criado com sucesso!');
        this.router.navigate(['/groups']);
      }, err => {
        this.toastr.error(JSON.stringify(err));
      })
    } else {
      this.toastr.error('Formulário inválido.')
    }
  }

}
