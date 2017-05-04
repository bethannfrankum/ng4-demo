import { Component } from '@angular/core';

import {Product} from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aircraft Listings';

myProducts : Array<Product> =[{
id: 'N160ME',
image:'',
description: '172SP. 180hp. Full King panel. KMA 26, KLN 94 GPS. KT 76C...',
location: 'Fayetteville, AR',
type: '2000 CESSNA 172S SKYHAWK SP',
price: '$200,000'
},
{
id: 'N6652D',
image:'',
type: '1979 BEECHCRAFT V35B BONANZA',
location: 'Branson, MO',
description: '1979 V35B. IO-520 BB. 3 Blade Hartzell. New Garmin panel...',
price: '$350,000'


}];

}
