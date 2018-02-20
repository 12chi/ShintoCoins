import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  ans = "";
  value = 0;
  balance = 0;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.balance = this._shintoService.getBalance();
    this.value = this._shintoService.getValue();
  }

  sellCoin() {
    console.log("this.ans: ", this.ans)
    if (this.balance >= parseInt(this.ans)) {
      this._shintoService.sellCoin(this.ans);
      this.balance = this._shintoService.getBalance();
      this.value = this._shintoService.getValue();
      this.ans = "";
    } else {
      console.log('Error: Insufficient Fund')
    }
  }

}
