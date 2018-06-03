import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Item } from '../../../beans/interfaces';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {

  public items: Item;
  constructor(private ss: SectionService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems() {
    this.items = this.ss.getData()[5];
  }
}
