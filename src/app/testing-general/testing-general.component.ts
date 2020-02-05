import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-general',
  templateUrl: './testing-general.component.html',
  styleUrls: ['./testing-general.component.css']
})
export class TestingGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function doSomethingWithVar() {
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomethingWithVar();


function doSomethingWithLet() {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomethingWithLet();

var count;
count = 1;
count = 'a';

// enum-example
enum Color {Red = 1, Purple, Orange, Green = 3, Blue = 5};
// let backgroundColor = Color.Orange // ATTENTION: Orange has value 3 like Green !!! (04.02.2020, SRM)

// Pascal Naming Convention = start with lower letter, every other word starts with capital letter
interface IPoint {
  x: number, 
  y: number, 
  draw: () => void
}

// Cohesion = Things that belong together should be part of one unit
// Interface: purely for decorations, cannot include implementation
// Class: Groups variables (properties) and functions (methods) that are highly related
// Object: Instance of a class

// Class
class Point {

  // Constructor
  constructor(private x: number, private y: number, private name?: string) {
  }

  // Properties
  get X() {
    return this.x;
  }

  get Y() {
    return this.Y;
  }

  get Name() {
    return this.name;
  }
  set Name(value) {
    this.name = value;
  }

  // Methods
  draw() {
    // ...
    console.log('X: ' + this.X + ', Y: ' + this.Y);
  }

  getDistance(another: Point) {
    // ...
  }
  
}

let point: Point = new Point(1, 2);
point.draw();


