import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-mines',
  templateUrl: './mines.component.html',
  styleUrls: ['./mines.component.css']
})
export class MinesComponent implements OnInit {
  algo = {}
  ans = "";

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.getAlgo();
  }

  getAlgo(): void {
    let randomAlgo = this._shintoService.getAlgo();
    this.algo = randomAlgo;
  }
  
  mineCoin(): void {
    console.log("ans: ", this.ans)
    console.log("algo: ", this.algo)
    if (this.ans == this.algo['answer']) {
      this._shintoService.mineCoin();
    } else {
      console.log('Wrong Answer')
    }
  }
}
