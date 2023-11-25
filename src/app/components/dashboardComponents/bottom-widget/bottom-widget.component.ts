import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-bottom-widget',
  templateUrl: './bottom-widget.component.html',
  styleUrls: ['./bottom-widget.component.css']
})
export class BottomWidgetComponent implements OnInit {

  tableData: any[] = [];

  constructor(private dataService: UserServiceService) { }

  ngOnInit(): void {
    this.dataService.getLeadsList().subscribe((response: any) => {
      this.tableData = response.data.results;
    });
  }

}
