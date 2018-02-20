import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  ans = "";
  value = 0;
  balance = 0;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.balance = this._shintoService.getBalance();
    this.value = this._shintoService.getValue();
  }

  buyCoin() {
    console.log("this.ans: ", this.ans)
    this._shintoService.buyCoin(this.ans);
    this.balance = this._shintoService.getBalance();
    this.value = this._shintoService.getValue();
    this.ans = "";
  }
}
