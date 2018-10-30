import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor(private _transfer: TransferService) { }

  // default words to check
  words: string[] = [
    "often",
    "very",
    "really",
    "just",
    "somewhat",
    "quite",
    "basically",
    "then",
    "actually"
  ];
  newWord: string;
  word: string;
  ngOnInit() {
  }

  // adds new word to check
  addWord = (word) => {
    word = word.toLowerCase().trim();
    if (this.words.indexOf(word) === -1 && word !== "") {
      this.words.push(word);
    }
    this.newWord = '';
  }

  // chooses which word to check
  toggleWord = (index) => {
    let thisWord = document.getElementById("id" + index);
    for (let i = 0; i < this.words.length; i++) {
      let eachWord = document.getElementById("id" + i);
      if (eachWord.classList.contains("active")) {
        eachWord.classList.remove("active");
      }
    }
    thisWord.classList.add("active");
    this.word = thisWord.innerHTML;
    this._transfer.word = this.word;
    this._transfer.active = true;
  }

}
