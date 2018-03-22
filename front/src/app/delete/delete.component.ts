import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MydbService } from '../mydb.service';
import { Mydb } from '../mydb';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private mydb:MydbService,private http:Http) { }

  dataarray:Mydb;
  getDat()
  {
    this.mydb.getData().subscribe(dataarray=>{
    this.dataarray=dataarray})
  }

  delte(id)
  {
this.mydb.deleteData(id).subscribe(()=>{this.getDat()});
  }

  ngOnInit() {
    this.getDat();
  }

}
