import { Injectable } from '@angular/core';
import { SecondService } from 'second';

@Injectable({
  providedIn: 'root'
})
export class LinkedService {

  constructor(private service: SecondService) { }
}
