import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CropService } from 'src/app/core/crop/crop.service';
import { TreeService } from 'src/app/core/tree/tree.service';
declare var $: any;

@Component({
  selector: 'app-crop-create',
  templateUrl: './crop-create.component.html',
  styleUrls: ['./crop-create.component.css', '../../shared/style/style.css']
})
export class CropCreateComponent implements OnInit {

  public trees = [];

  public form = new FormGroup({
    info: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    grossWeight: new FormControl('', Validators.required),
    tree: new FormControl('', Validators.required)
  })

  constructor(
    private cropService: CropService,
    private treeService: TreeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.treeService.getAll()
      .subscribe(res => {
        this.trees = res;
        setTimeout(() => {
          $('.selectpicker').selectpicker('refresh');
        })
      });
  }

  public submitForm() {
    if (this.form.valid) {
      this.cropService.create({
        info: [this.form.controls['info'].value],
        date: this.form.controls['date'].value,
        tree: this.form.controls['tree'].value,
        grossWeight: this.form.controls['grossWeight'].value
      }).subscribe(res => {
        alert('Colheita cadastrada com sucesso!');
        this.router.navigate(['colheitas']);
      }, err => {
        alert(JSON.stringify(err));
      })
    } else {
      alert('Formulário inválido.');
    }
  }

}
