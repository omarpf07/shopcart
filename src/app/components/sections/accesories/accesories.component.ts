import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Item } from '../../../beans/interfaces';

@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})

export class AccesoriesComponent implements OnInit {
  public items: Item;
  constructor(private ss: SectionService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems() {
    this.items = this.ss.getData()[2];
    console.log(this.items);
  }
}
