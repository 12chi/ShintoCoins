import { Component, OnInit } from '@angular/core';
import { ShintoService } from './shinto.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor (private _shinService: ShintoService) {}

  title = 'app';
  ngOnInit() {
    //this.getAllTasks();
  }
  
}