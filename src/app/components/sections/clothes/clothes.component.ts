import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Item } from '../../../beans/interfaces';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})

export class ClothesComponent implements OnInit {

  public items: Item;
  constructor(private ss: SectionService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems() {
    this.items = this.ss.getData()[0];
  }
}
