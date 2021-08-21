import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talking-tom',
  templateUrl: './talking-tom.component.html',
  styleUrls: ['./talking-tom.component.css']
})
export class TalkingTomComponent implements OnInit {

  former_text: String = 'Hi, How are you ?';
  latter_text: String = "Hey, I'm good!";

  constructor() { }

  ngOnInit(): void {
  }

}
