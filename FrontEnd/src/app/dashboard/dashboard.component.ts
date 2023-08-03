import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  textAfterLogin = "";
  products: any = [];
  constructor(
    private productService: ProductService
  ){ }

  ngOnInit(): void {
    this.textAfterLogin = ""

    // Get data products
    this.productService.getProducts().subscribe(result => {
      if(result){
        console.log(result);
        this.products = result;
      }
    }, error => {
      this.products = [];
      console.log("Have an error");
    })
  }

  calDiscountPrice(price: number, discount: number){
    const actualPrice = price - ((discount/100) * price);
    return actualPrice;
  }
}
