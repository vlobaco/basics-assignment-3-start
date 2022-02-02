import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = false;
  detailInfo = [];

  onDisplayDetails() {
    this.displayDetails=!this.displayDetails;
    this.detailInfo.push(new Date().toString());
  }

  getBiggerThanFive(info: string): boolean{
    return this.detailInfo.indexOf(info)>3
  }

  getColor(info: string): string {
    return this.getBiggerThanFive(info) ? "blue" : "white";
  }
}
