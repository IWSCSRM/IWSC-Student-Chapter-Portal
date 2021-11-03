import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    function animateValue(id:any, start:any, end:any, duration:any) {
      if (start === end) return;
      var range = end - start;
      var current = start;
      var increment = end > start? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var obj:any = document.getElementById(id);
      var timer = setInterval(function() {
          current += increment;
       obj.innerHTML = current;
          
          
          
          if (current == end) {
              clearInterval(timer);
          }
      }, stepTime);
  }
  
  animateValue("value", 10, 70, 5000);
  animateValue("value1", 10, 35, 5000);
  animateValue("value2", 10, 15, 5000);
  }
  

}