import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-middle-widget',
  templateUrl: './middle-widget.component.html',
  styleUrls: ['./middle-widget.component.css']
})
export class MiddleWidgetComponent implements OnInit {

  constructor(private userService:UserServiceService) { }
  public result:any ={};
  public data:any = []
  ngOnInit(): void {
    this.userService.getActiveLeads().subscribe((res) =>{
      this.result = res;
      this.getResults()
    } 
    )
    
  }
  public getResults(){
    this.data = this.result.data?.results
    console.log(this.data)
  }

}
