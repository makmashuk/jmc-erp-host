import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor() { }

  getPolicyList(){
    return of(["Male", "Female", "Others"]);
  }
}
