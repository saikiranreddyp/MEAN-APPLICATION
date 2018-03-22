import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MydbService } from '../mydb.service';
import { Mydb } from '../mydb';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private mydb:MydbService,private http:Http) { }

  model=new Mydb();
  addDat()
  {
    this.mydb.addData(this.model).subscribe();
    console.log("i am in adddat method")
  }
  

  ngOnInit() {
  }

}
