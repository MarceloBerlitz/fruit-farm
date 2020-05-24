import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GroupModule } from './group/group.module';
import { TreeModule } from './tree/tree.module';
import { SpeciesModule } from './species/species.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GroupModule,
    TreeModule,
    SpeciesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
