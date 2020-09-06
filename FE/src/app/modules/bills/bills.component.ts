import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  myFilter = (d: Date): boolean => {
    const today = new Date()
    // Prevent Saturday and Sunday from being selected.
    return d.getTime()< today.getTime()
  }
  constructor() { }

  ngOnInit() {
  }

}
