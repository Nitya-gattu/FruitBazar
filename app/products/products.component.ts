import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[
    {
      "id": 1,
      "name": "Apple - 1 Kg",
      "price": 72,
      "image": "assets/images/fruitcart.jpg",
      
    },

    {
      "id": 2,
      "name": "Banana - 1 Kg",
      "price": 72,
      "image": "assets/images/fruitcart.jpg",
      
    },
    {
      "id": 3,
      "name": "Kiwi - 1 Kg",
      "price": 72,
      "image": "assets/images/fruitcart.jpg",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
