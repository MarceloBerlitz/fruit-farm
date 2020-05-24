import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { ListItemModel } from 'src/app/shared/list-item/list-item.model';
import { SpeciesService } from 'src/app/core/species/species.service';
import { TreeService } from 'src/app/core/tree/tree.service';
import { CropService } from 'src/app/core/crop/crop.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css', '../../shared/style/style.css']
})
export class SpeciesDetailsComponent implements OnInit {

  public species: ListItemModel;
  public trees: ListItemModel[];
  public crops: ListItemModel[];

  constructor(
    private speciesService: SpeciesService,
    private treeService: TreeService,
    private cropService: CropService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.speciesService.get(this.route.snapshot.paramMap.get('id'))
      .pipe(
        tap(res => {
          this.species = { title: res.description }
        }),
        switchMap(res => 
          forkJoin(
            this.treeService.getBySpecies(res._id),
            this.cropService.getBySpecies(res._id)
          )
        )
      ).subscribe(res => {
        const [ t, c ] = res;

        this.trees = t.map(tree => ({
          title: `${tree.species.description} - ${tree.description}`,
          footer: tree.date
        }));

        this.crops = c.map(crop => ({
          title: `${crop.tree.description} - ${crop.date}`,
          text: crop.info.reduce((acc, cur) => `${cur} ${acc}`, ''),
          footer: `${crop.grossWeight}kg`
        }));
      })
  }

  public deleteSpecies(): void {

  }

}
