import { Injectable } from '@angular/core';

@Injectable()
export class ShintoService {
  ledger = [];
  balance = 0;
  value = 1;
  allAlgo = [{question: "What is the 3rd Finonacci number?", answer: "2"},
  {question: "What is the 4th Finonacci number?", answer: "3"},
  {question: "What is the 5th Finonacci number?", answer: "5"},
  {question: "What is the 6th Finonacci number?", answer: "8"},
  {question: "What is the 7th Finonacci number?", answer: "13"},
  {question: "What is the 8th Finonacci number?", answer: "21"},
  {question: "What is the 9th Finonacci number?", answer: "34"}];

  constructor() { }

  getAlgo() {
    let num = Math.floor(Math.random() * 6) + 1  
    return this.allAlgo[num]
  }

  mineCoin() {
    let num = Math.floor(Math.random() * 1000) + 1  
    let tranx = {id: num, action: "mine", amount: "1", value: this.value}
    this.ledger.push(tranx);
    this.balance +=1;
    this.value +=1;
    console.log("Mine ledger: ", this.ledger);
    console.log("Mine balance: ", this.balance);
  }

  buyCoin(num) {
    let id = Math.floor(Math.random() * 1000) + 1;
    let tranx = {id: id, action: "buy", amount: num, value: this.value}
    this.ledger.push(tranx);
    
    this.value += 1;
    this.balance += parseInt(num);

    console.log("Buy ledger: ", this.ledger);
    console.log("Buy balance: ", this.balance);
  } 

  sellCoin(num) {
    let id = Math.floor(Math.random() * 1000) + 1;
    let tranx = {id: id, action: "sell", amount: num, value: this.value}
    this.ledger.push(tranx);
    this.value -= 1;
    this.balance -= num;
    console.log("Buy ledger: ", this.ledger);
    console.log("Buy balance: ", this.balance);
  } 

  getValue() {
    return this.value;
  }

  getBalance() {
    return this.balance;
  }

  getLedger() {
    return this.ledger;
  }
}
