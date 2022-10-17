import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWService } from '../service/data/hello-w.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomedata:string | undefined;
  name = 'xyz'
  name1 = 'xyz'
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }
  // getMessage() {
  //   // console.log(this.service.executeHelloWorldBeanService());
  //   this.service.executeHelloWorldBeanService().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error=>this.handleErrorResponse(error)
  //   );
  // }
  getMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name1).subscribe(
      response => this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response: any) {
    console.log(response.message);
    this.welcomedata=response.message;
  }
  handleErrorResponse(error: any){
    this.welcomedata=error.error.message;
  }
}
