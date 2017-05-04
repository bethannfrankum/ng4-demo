import { Component, OnInit, Input } from '@angular/core';

import {Product} from '../shared/models/product';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
    @Input()product: Product;
    
  constructor() { }

  ngOnInit() {
  }

selected(name:string){
    alert(name);
}

}
