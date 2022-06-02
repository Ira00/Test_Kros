import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { range } from 'rxjs';
import { OperationsService } from '../services/operations.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public s = '';

  receiveFromChild(event){
    this.s = event;
    console.log(this.s);
 
  }
  constructor() {}








}
