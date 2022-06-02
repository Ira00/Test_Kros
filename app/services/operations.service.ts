import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  subStr(v1: number[][], n: number) {
    // let sub = [][]
    for(let i = 0 ; i<v1[0].length; i++){
      for(let j = 0 ; j<v1[0].length; j++){
        if (i != n) {
          v1[i][j] = v1[i][j] - v1[n][j];
        }
      }
    }
    return v1
  }
  constructor() { }

}
