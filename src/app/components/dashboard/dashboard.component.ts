import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  //   this.userService.getUserInfo().subscribe((res) => console.log(res))
  //   this.userService.getGraphAndStageSetails().subscribe((res) => console.log(res))
  //   this.userService.getProbability().subscribe((res) => console.log(res))
  //   this.userService.getActiveLeads().subscribe((res) => console.log(res))
  //   this.userService.getLeadsList().subscribe((res) => console.log(res))
  //
 }

}
