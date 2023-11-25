import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-middle-part2',
  templateUrl: './middle-part2.component.html',
  styleUrls: ['./middle-part2.component.css']
})
export class MiddlePart2Component implements OnInit {

  constructor(private userService:UserServiceService) { }
  result:any ={}
  ngOnInit(): void {
    this.userService.getGraphAndStageSetails().subscribe((res) =>{
      this.result = res;
      this.createChart();

    })
    
  }

  createChart(): void {
    const data = {
      labels: this.result.data.graph.map((item:any)=> item.stage_name),
      datasets: [
        {
          label: "Number of Leads",
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          data: this.result.data.graph.map((item:any)=> item.leads)
        }
      ]
    };

    const config:any = {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Stage Name"
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Leads"
            }
          }
        }
      }
    };

    const ctx = document.getElementById('leadsChart') as HTMLCanvasElement;
    new Chart(ctx, config);
  }
}
