import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reserveQuote (){
      this.router.navigate(['/confirmation']);
  }

}
