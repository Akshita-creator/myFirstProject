import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talking-tom',
  templateUrl: './talking-tom.component.html',
  styleUrls: ['./talking-tom.component.css']
})
export class TalkingTomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(function(){  }, 3000);
  }

}
