import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  navLinks: { path, label }[] = []
  constructor() { }

  ngOnInit() {
    this.navLinks = [
      { path: ['current'], label: 'Current Training' },
      { path: ['past'], label: 'Past Trainings' },
    ]
  }

}
