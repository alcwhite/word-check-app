import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  text: string;
  constructor(private _transfer: TransferService) { }

  ngOnInit() {
  }

  // sets text variables and sends them across app
  inputText = () => {
    this._transfer.text = this.text.trim();
    if (this.text.trim() === '') {
      this._transfer.total = 0;
    } else {
      this._transfer.total = this.text.trim().split(' ').length;
    }

  }


}
