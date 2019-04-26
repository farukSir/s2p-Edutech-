import { Component, OnInit,Input  } from '@angular/core';
import {RestService} from '../../../services/rest.service';
@Component({
  selector: 'app-quantz',
  templateUrl: './quantz.component.html',
  styleUrls: ['./quantz.component.css']
})
export class QuantzComponent implements OnInit {
 menu:any = [
    {name: 'Reports', img: 'assets/per.jpg', displayText: 'Performance Report'},
    {name: 'qa', img: 'assets/exam.jpg', displayText: 'Quantitative Aptitude', path: 'qa'},
    {name: 'lr', img: 'assets/exam.jpg', displayText: 'Logical Reasoning'},
    {name: 'di', img: 'assets/exam.jpg', displayText: 'Data Interpretation'},
    {name: 'c', img: 'assets/images.png', displayText: 'C Language'},
    {name: 'java', img: 'assets/exam.jpg', displayText: 'Java Language'},
    
  ];
  constructor(private rest: RestService) { }

  ngOnInit() {
      this.rest.getAll('topics').subscribe(success =>{
        this.menu = success;
        console.log(success);
      },
      error =>{
        alert(error);
      });
  }

}
