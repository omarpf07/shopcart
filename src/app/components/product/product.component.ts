import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from '../../services/section.service';
import { Product } from '../../beans/interfaces';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public number: number;
  constructor(private location: Location, private ar: ActivatedRoute, private ss: SectionService) { }

  ngOnInit() {
    this.getProduct();
    this.number = Math.random() * 100000000;
    console.log(this.number);
  }

  getProduct() {
    this.ar.params.subscribe( params => {
      this.product = this.ss.getProduct( params['ids'], params['id']);
    });
    console.log(this.product);
  }

  goBack() {
    this.location.back();
  }

}
