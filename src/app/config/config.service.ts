import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment'

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig() {
    const configUrl = environment.apiUrl//'http://publick_net:3000/config';
    debugger
    return this.http.get(configUrl).subscribe(
      data => {
        console.log("response :", data)
      },
      error => {
        console.log("error :", error)
      }
    );
  }

}
