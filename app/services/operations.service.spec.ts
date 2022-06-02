import { TestBed } from '@angular/core/testing';

import { OperationsService } from './operations.service';

describe('OperationsService', () => {
  let service: OperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit('Віднімання рядка', () =>
  {
    let v = [[3,5],[3,5]];
    let n = 0;
    let result = [[3,5],[0,0]]
    let res =service.subStr(v,n);
    expect(res).toEqual(result);
  });


});
