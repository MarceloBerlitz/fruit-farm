import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CropService } from 'src/app/core/crop/crop.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css', '../../shared/style/style.css']
})
export class CropDetailsComponent implements OnInit {

  public crop: ListItemModel;

  constructor(
    private service: CropService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.get(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        this.crop = {
          title: `${res.tree ? res.tree.description : 'Árvore excluída'} - ${res.date}`,
          text: res.info ? res.info[0] : '',
          footer: `${res.grossWeight}kg`,
          value: res._id
        }
      })
  }

  public deleteCrop(): void {
    if(confirm(`Deseja mesmo excluir a colheita ${this.crop.title}?`)) {
      this.service.delete(this.crop.value)
        .subscribe(res => {
        alert('Colheita excluída com sucesso.');
        this.router.navigate(['/colheitas']);
      }, res => alert(JSON.stringify(res)));
    }
  }

  public editCrop(): void {
    this.router.navigate([`/colheitas/${this.crop.value}/editar`]);
  }

}
