import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu:any = [
    {name: 'Reports', img: 'assets/per.jpg', displayText: 'Performance Report'},
    {name: 'qa', img: 'assets/exam.jpg', displayText: 'Quantitative Aptitude', path: 'qa'},
    {name: 'lr', img: 'assets/exam.jpg', displayText: 'Logical Reasoning'},
    {name: 'di', img: 'assets/exam.jpg', displayText: 'Data Interpretation'},
    {name: 'c', img: 'assets/images.png', displayText: 'C Language'},
    {name: 'java', img: 'assets/exam.jpg', displayText: 'Java Language'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
