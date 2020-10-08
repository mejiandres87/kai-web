import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalMoreDetailComponent } from '../modal-more-detail/modal-more-detail.component';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  @Input() type: 'basic' | 'medium' | 'hide';
  @Output() selected = new EventEmitter<any>();
  types = {
    basic: {
      img: '../../../assets/images/basic.png',
      price: 25,
    },
    medium: {
      img: '../../../assets/images/medium.png',
      price: 35,
    },
    hide: {
      img: '../../../assets/images/hide.png',
      price: 50,
    },
  };

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {}

  openDialogDetail(): void {
    this.dialog.open(ModalMoreDetailComponent, {
      width: '400px',
    });
  }

  selectedType(): void {
    this.selected.emit({
      type: this.type,
      price: this.types[this.type].price
    });
  }

}
