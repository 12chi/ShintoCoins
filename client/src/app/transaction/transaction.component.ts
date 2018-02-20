import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  id = "";
  amount = "";
  action = "";

  constructor(private _route: ActivatedRoute, private _shintoService: ShintoService) { 
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id');
      console.log("id: ", this.id)
      let ledger = this._shintoService.getLedger();
      for (let trans of ledger) {
        if (trans['id'] == this.id) {
          this.action = trans['action'];
          this.amount = trans['amount'];
          break;
        }
      }
    });
  }

}
