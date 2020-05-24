import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCreateComponent } from './tree-create.component';

describe('TreeCreateComponent', () => {
  let component: TreeCreateComponent;
  let fixture: ComponentFixture<TreeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
