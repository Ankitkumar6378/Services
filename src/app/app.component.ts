import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  user:any;
  constructor(private userdata:UserdataService)
  {
    console.warn("userdata",userdata.userdata())
    this.user=userdata.userdata();
  }
}
