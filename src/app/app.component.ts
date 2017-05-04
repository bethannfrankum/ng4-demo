import { Component } from '@angular/core';

import {Product} from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

myProducts : Array<Product> =[{
id: "1",
description: 'lorem ipsum',
name: 'N160ME',
type: '1999 Cessna 172'
},
{
id: "2",
type: '1979 A36 Bonanza Turbo Prop',
name: 'N6652D',
description: 'lorem ipsum 2'


}];

}
