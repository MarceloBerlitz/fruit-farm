import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TreeService } from 'src/app/core/tree/tree.service';
import { CropService } from 'src/app/core/crop/crop.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-crop-edit',
  templateUrl: './crop-edit.component.html',
  styleUrls: ['./crop-edit.component.css', '../../shared/style/style.css']
})
export class CropEditComponent implements OnInit {

  private id: string;
  public trees = [];

  public form = new FormGroup({
    info: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    grossWeight: new FormControl('', Validators.required),
    tree: new FormControl('', Validators.required)
  });

  constructor(
    private treeService: TreeService,
    private cropService: CropService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cropService.get(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.id = res._id;

        this.form.controls['info'].setValue(res.info[0]);
        this.form.controls['date'].setValue(res.date);
        this.form.controls['grossWeight'].setValue(res.grossWeight);
        this.form.controls['tree'].setValue(res.tree._id);
        this.updateSelect();
      });


    this.treeService.getAll()
    .subscribe(res => {
      this.trees = res;
      this.updateSelect();
    });
  }

  public submitForm() {
    if (this.form.valid) {
      this.cropService.edit(this.id, {
        info: [this.form.controls['info'].value],
        date: this.form.controls['date'].value,
        tree: this.form.controls['tree'].value,
        grossWeight: this.form.controls['grossWeight'].value
      }).subscribe(res => {
        alert('Colheita editada com sucesso!');
        this.router.navigate([`colheitas/${this.id}`]);
      }, err => {
        alert(JSON.stringify(err));
      })
    } else {
      alert('Formulário inválido.');
    }
  }

  private updateSelect() {
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    });
  }
}
