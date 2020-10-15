import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpecialistComponent } from './card-specialist.component';

describe('CardSpecialistComponent', () => {
  let component: CardSpecialistComponent;
  let fixture: ComponentFixture<CardSpecialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSpecialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
