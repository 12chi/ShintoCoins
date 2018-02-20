import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger = [];

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.showLedger();
  }

  showLedger() {
      let tempL = this._shintoService.getLedger();
      this.ledger = tempL;
      console.log('ledger: ', this.ledger)
  }
}
