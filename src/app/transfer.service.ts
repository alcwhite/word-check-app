import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  word: string;
  active: boolean;
  text: string;
  total: number;
  constructor() { }

}
