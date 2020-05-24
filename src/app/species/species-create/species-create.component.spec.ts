import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesCreateComponent } from './species-create.component';

describe('SpeciesCreateComponent', () => {
  let component: SpeciesCreateComponent;
  let fixture: ComponentFixture<SpeciesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
