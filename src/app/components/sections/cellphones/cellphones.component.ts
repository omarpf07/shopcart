import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Item } from '../../../beans/interfaces';
@Component({
  selector: 'app-cellphones',
  templateUrl: './cellphones.component.html',
  styleUrls: ['./cellphones.component.css']
})
export class CellphonesComponent implements OnInit {
  public items: Item;
  constructor(private ss: SectionService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems() {
    this.items = this.ss.getData()[4];
  }
}
