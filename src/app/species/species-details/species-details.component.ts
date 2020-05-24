import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.speciesService.get(this.route.snapshot.paramMap.get('id'))
      .pipe(
        tap(res => {
          this.species = { title: res.description, value: res._id }
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
          text: crop.info ? crop.info[0] : '',
          footer: `${crop.grossWeight}kg`
        }));
      })
  }

  public deleteSpecies(): void {
    if(confirm(`Deseja mesmo excluir a espécie ${this.species.title}?`)) {
      this.speciesService.delete(this.species.value)
        .subscribe(res => {
          alert('Espécie excluída com sucesso.');
          this.router.navigate(['especies']);
        }, res => alert(JSON.stringify(res)));
    }
  }

}
