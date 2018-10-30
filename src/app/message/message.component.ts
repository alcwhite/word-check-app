import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  word: string;
  buttonWord: string;
  checkWord;
  active: boolean = false;
  num: number = 0;
  total: number;
  text: string;
  percent: number;
  constructor(private _transfer: TransferService) { }

  ngOnInit() {

  }

  // triggers when Test button is clicked
  showMessage = () => {
    this.word = this._transfer.word;
    this.text = this._transfer.text;
    this.total = this._transfer.total;
    if (this._transfer.active && this.total > 11) {
      this.active = true;
    }
    this.checkWord = new RegExp('\\b' + this.word + '\\b', 'ig');
    this.calculateUsage();
    if (this.total >= 5000) {
      this.calculatePercent();
    }
  }

  // sets variable (for button text)
  setData = () => {
    this.buttonWord = this._transfer.word;
  }

  // calculates number of usages of the chosen word
  calculateUsage = () => {
    if (this.text.match(this.checkWord)) {
      this.num = this.text.match(this.checkWord).length;
      return this.num;
    }
    else {
      this.num = 0;
    }
  }

  // calculates percentage of text that is the chosen word
  calculatePercent = () => {
    let decimal = (this.num / this.total) * 100;
    this.percent = parseFloat(decimal.toFixed(2));
  }

}
