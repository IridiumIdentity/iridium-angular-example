/*
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
import { Component, OnInit } from '@angular/core';
import { NgxIridiumClientService } from '@iridiumidentity/ngx-iridium-client'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  loggedIn = false;
  imagePath: string;
  hasError: boolean = false;
  constructor(private iridiumClient: NgxIridiumClientService) {
    this.imagePath = '/assets/iridium-3C-xl.png';
  }


  ngOnInit() {
    this.iridiumClient.authorize()
      .then(successful => {
        if (successful) {
          this.loggedIn = true

          console.log('auth was successful')
        } else {
          console.log('auth was not successful')
          this.hasError = true;
        }

      });
  }

}
