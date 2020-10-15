import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMoreDetailComponent } from './modal-more-detail.component';

describe('ModalMoreDetailComponent', () => {
  let component: ModalMoreDetailComponent;
  let fixture: ComponentFixture<ModalMoreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMoreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
