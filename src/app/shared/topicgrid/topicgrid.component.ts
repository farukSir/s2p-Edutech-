import { Component, OnInit,Input  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topicgrid',
  templateUrl: './topicgrid.component.html',
  styleUrls: ['./topicgrid.component.css']
})
export class TopicgridComponent implements OnInit {

 

  constructor(private route: ActivatedRoute,private router: Router) { 
    
  }
  @Input()menu:any = [];
  ngOnInit() {}
  goToTest(item){
  let obj:any = {}; //make a new object that name is obj
  obj.topic = item.name; 
  obj.category = item.category;
 
    
    this.router.navigate(["/student/quantz/qtest"],{"queryParams":obj});
    
    //console.log(this.dumyData);
   //console.log(item.category,item.name);
  }

  

  
}
