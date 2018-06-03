import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../../services/section.service';
import { Item } from '../../../beans/interfaces';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  public items: Item;
  constructor(private ss: SectionService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems() {
    this.items = this.ss.getData()[1];
  }
}
