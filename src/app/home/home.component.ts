import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isShowing = true;
  
    
  users: Object;
  constructor(private data: DataService,) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }
  clickMessage: string;
firstClick() {
  if(this.isShowing) {
    this.isShowing = false;
    return;
  }else if(!this.isShowing) {
    this.isShowing = true;
   return;
  }
}
 


}

