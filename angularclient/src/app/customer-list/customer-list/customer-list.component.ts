import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer'; 
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers!: Customer[];

  constructor(private customerService: CustomerService) {

   }

  ngOnInit(){
    this.customerService.list().subscribe(data => {
      this.customers = data;
    });
  }

}