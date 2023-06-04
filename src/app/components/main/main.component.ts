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
import { Component } from '@angular/core';
import { NgxIridiumClientService } from '@iridiumidentity/ngx-iridium-client';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  imagePath: string;
  constructor(private iridiumClient: NgxIridiumClientService) {
    this.imagePath = '/assets/iridium-3C-xl.png';
  }

  public login(): void {
    this.iridiumClient.authenticateWithExternalRedirect()

  }

}
