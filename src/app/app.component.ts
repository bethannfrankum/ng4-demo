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
name: 'Product 1'
},
{
id: "2",
description: 'lorem ipsum 2',
name: 'Product 2'
}];

}
