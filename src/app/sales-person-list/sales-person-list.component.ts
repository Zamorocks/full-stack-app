import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 50000),
    new SalesPerson("John", "doe", "john.doe@email.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@gmail.com", 90000),
    new SalesPerson("Mai", "Truong", "mai.truong@yahoo.com", 60000)
  ];

  constructor() { }

  ngOnInit(): void {
    console.table(this.salesPersonList);
  }

}
