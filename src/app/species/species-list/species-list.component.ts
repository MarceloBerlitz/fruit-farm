import { Component, OnInit } from '@angular/core';

import { SpeciesService } from 'src/app/core/species/species.service';
import { ListItemModel } from 'src/app/shared/list-item/list-item.model';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css', '../../shared/style/style.css']
})
export class SpeciesListComponent implements OnInit {

  public species: ListItemModel;

  constructor(
    private service: SpeciesService
  ) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(res => {
        this.species = res.map(r => ({
          value: r._id,
          title: r.description,
          link: `especies/${r._id}`
        }));
      });
  }

}
