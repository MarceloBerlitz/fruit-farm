import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/core/group/group.service';
import { TreeService } from 'src/app/core/tree/tree.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    private treeService: TreeService,
    private groupService: GroupService
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
      this.groupService.createGroup({
        name: this.form.controls['name'].value,
        description: this.form.controls['description'].value,
        trees: this.form.controls['trees'].value
      }).subscribe(res => {
        alert('Grupo criado com sucesso!');
      }, err => {
        alert(err);
      })
    }
  }

}
