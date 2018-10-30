import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config/config.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = environment.superSecretKey;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getConfig();
  }
}
