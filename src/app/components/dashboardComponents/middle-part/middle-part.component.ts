import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-middle-part',
  templateUrl: './middle-part.component.html',
  styleUrls: ['./middle-part.component.css']
})
export class MiddlePartComponent implements OnInit {

  constructor(private userService:UserServiceService ) { }
  result:any = {}
  ngOnInit(): void {
    this.userService.getProbability().subscribe((res) => this.result = res)
    console.log(this.result)
  }
  

}
