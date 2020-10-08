import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-specialist',
  templateUrl: './card-specialist.component.html',
  styleUrls: ['./card-specialist.component.css']
})
export class CardSpecialistComponent implements OnInit {

  @Input() avatar: string;
  @Input() name: string;
  @Output() selected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  openDialogDetail(): void {}

  selectedOption(): void {
    this.selected.emit({ name });
  }

}
