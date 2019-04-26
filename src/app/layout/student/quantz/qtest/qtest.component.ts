import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-qtest',
  templateUrl: './qtest.component.html',
  styleUrls: ['./qtest.component.css']
})
export class QtestComponent implements OnInit {

   
   
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
     
      
  })

  }

}
