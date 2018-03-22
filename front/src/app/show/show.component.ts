import { Component, OnInit } from '@angular/core';
import { MydbService } from '../mydb.service';
import { Http } from '@angular/http';
import { Mydb } from '../mydb';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private mydb:MydbService,private http:Http) { }

  model:Mydb
modell:any;
  display(){
    this.mydb.getData().subscribe(array=>{
      this.model=array;
    })

  }

  ngOnInit() {
    this.display();
  }

}
