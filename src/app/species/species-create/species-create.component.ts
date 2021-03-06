import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { SpeciesService } from 'src/app/core/species/species.service';

@Component({
  selector: 'app-species-create',
  templateUrl: './species-create.component.html',
  styleUrls: ['./species-create.component.css', '../../shared/style/style.css']
})
export class SpeciesCreateComponent implements OnInit {

  public form = new FormGroup({
    description: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private service: SpeciesService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public submitForm() {
    if (this.form.valid) {
      this.service.create({
        description: this.form.controls['description'].value
      }).subscribe(res => {
        this.toastr.success('Espécie cadastrada com sucesso!');
        this.router.navigate(['/especies']);
      }, err => {
        this.toastr.error(JSON.stringify(err));
      })
    } else {
      this.toastr.error('Formulário inválido.');
    }
  }

}
