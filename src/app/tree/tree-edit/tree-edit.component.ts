import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SpeciesService } from 'src/app/core/species/species.service';
import { TreeService } from 'src/app/core/tree/tree.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-tree-edit',
  templateUrl: './tree-edit.component.html',
  styleUrls: ['./tree-edit.component.css', '../../shared/style/style.css']
})
export class TreeEditComponent implements OnInit {

  private id: string;
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.treeService.get(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.id = res._id;
        this.form.controls['description'].setValue(res.description);
        this.form.controls['date'].setValue(res.date);
        this.form.controls['species'].setValue(res.species._id);
        this.updateSelect();
    });

    this.speciesService.getAll().subscribe(res => {
      this.species = res;
      this.updateSelect();

    });
  }

  public submitForm() {
    if (this.form.valid) {
      this.treeService.edit(
        this.id,
        {
        description: this.form.controls['description'].value,
        date: this.form.controls['date'].value,
        species: this.form.controls['species'].value
      }).subscribe(res => {
        alert('Árvore editada com sucesso!');
        this.router.navigate([`arvores/${this.id}`]);
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
