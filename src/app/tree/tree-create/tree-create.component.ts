import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SpeciesService } from 'src/app/core/species/species.service';
import { TreeService } from 'src/app/core/tree/tree.service';
import { Router } from '@angular/router';
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
    private router: Router
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
        alert('Árvore cadastrada com sucesso!');
        this.router.navigate(['/arvores']);
      }, err => {
        alert(JSON.stringify(err));
      })
    } else {
      alert('Formulário inválido.');
    }
  }

}
