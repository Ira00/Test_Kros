import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { OperationsService } from '../services/operations.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit{
  //Приклад 1
  stroka = '';

  vec1 = new FormControl(2, [Validators.max(6), Validators.min(1), Validators.required]);
  strr = new FormControl(0, [Validators.max(this.vec1.value - 1), Validators.min(0), Validators.required]);
  rows = this.vec1.value;
  cols = this.vec1.value;
  form = new FormArray([]);

  ngOnInit() {

  }
  constructor(public operations:OperationsService) {

  }
  createMatrix() {
    while (this.form.length > 0) {
      this.form.removeAt(0);
    }
    this.rows = this.vec1.value;
    this.cols = this.vec1.value;
    for (let i = 0; i < this.rows; i++) {
      this.form.push(new FormArray([]))
      for (let j = 0; j < this.cols; j++) {
        (this.form.at(i) as FormArray).push(new FormControl())
      }
    }
  }
  result(){
    this.stroka = '';
    let s = this.operations.subStr(this.form.value, this.strr.value)
    for(let i = 0 ; i<this.vec1.value; i++){
      this.stroka += 'Рядок '+i + ': ';
      for(let j = 0 ; j<this.vec1.value; j++){
        this.stroka += s[i][j]+' ';
      }
    }
  }
  @Output() public outToParent = new EventEmitter();
  sendToParent() {
    this.result();
    this.outToParent.emit(this.stroka);
  }


}
