import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {  HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MydbService } from './mydb.service';
import { RouterLink,RouterModule,Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

const route:Routes=[
  {path:'welcome',component:WelcomeComponent},
  {path:'show',component:ShowComponent},
  {path:'add',component:AddComponent},
  {path:'delete',component:DeleteComponent}

]

@NgModule({
  declarations: [
    AppComponent,WelcomeComponent, ShowComponent, AddComponent, DeleteComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),FormsModule,HttpModule
  ],
  providers: [MydbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
