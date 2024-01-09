import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  // disableSelect = new FormControl(false);
  selected = 'option2';
  selectedOption: any = 1;

  items: any = [];
  newItems: any = '';

  totalPrice: any = 0;
  initial: any;

  isItemsEmpty:boolean=true;


  constructor(private service: ServiceService) {
    console.log(this.selectedOption);
  }

  ngOnInit(): void {
    this.loadItems();

    this.newItems = this.service.cardData;

    if (this.newItems != null) {
      this.items.push(this.newItems);
      this.save();
      this.newItems = '';
    }

    this.totalPrice = this.items.reduce(
      (tot: any, val: any) => parseInt(tot) + parseInt(val.price),
      0
    );

    if(this.items.length==0){
      this.isItemsEmpty=true;
    }else{
      this.isItemsEmpty=false;
    }
  }

  loadItems() {
    let storedItems = sessionStorage.getItem('items');
    if (storedItems !== null) {
      this.items = JSON.parse(storedItems);
    }
  }

  removeItem(index: any) {
    this.items.splice(index, 1);
    this.save();
    this.totalPrice = this.items.reduce(
      (tot: any, val: any) => tot + val.price,
      0
    );

    if(this.items.length==0){
      this.isItemsEmpty=true;
    }
  }

  save() {
    sessionStorage.setItem('items', JSON.stringify(this.items));
  }

  onSelected(data: any) {
    this.selectedOption = data;
  }
}
