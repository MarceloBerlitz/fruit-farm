import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { SpeciesService } from 'src/app/core/species/species.service';
import { TreeService } from 'src/app/core/tree/tree.service';
declare var $: any;

@Component({
  selector: 'app-tree-create',
  templateUrl: './tree-create.component.html',
  styleUrls: ['./tree-create.component.css', '../../shared/style/style.css']
})
export class TreeCreateComponent implements OnInit {

  public species = [];

  public form = new FormGroup({
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    species: new FormControl('', [])
  });

  constructor(
    private speciesService: SpeciesService,
    private treeService: TreeService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.speciesService.getAll().subscribe(res => {
      this.species = res;
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      })
    });
  }

  public submitForm() {
    if (this.form.valid) {
      this.treeService.create({
        description: this.form.controls['description'].value,
        date: this.form.controls['date'].value,
        species: this.form.controls['species'].value
      }).subscribe(res => {
        this.toastr.success('Árvore cadastrada com sucesso!');
        this.router.navigate(['/arvores']);
      }, err => {
        this.toastr.error(JSON.stringify(err));
      })
    } else {
      this.toastr.error('Formulário inválido.');
    }
  }

}
