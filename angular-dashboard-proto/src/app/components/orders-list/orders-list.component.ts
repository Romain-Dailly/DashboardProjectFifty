import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import moment from 'moment';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {

  @Input() ordersList;
  @Input() text;
  @Output() showOrdersListToFalse = new EventEmitter();

  private noOrders: boolean = false;
  
  private ordersListWithFormattedDate;
  style = {
    position:'fixed',
    height: '10.3vh',
    top: '89.7vh'
  };
  constructor() { }

  // Hide OrdersList
  setShowOrdersListToFalse() {
    this.showOrdersListToFalse.emit(false);
  }
  // Resize event
  onResizeEnd(event: ResizeEvent): void {
    // console.log('Element was resized', event);
    this.style = {
      position: 'fixed',
      top: `${event.rectangle.top}px`,
      height: `${event.rectangle.height}px`
    };
  }
  ngOnInit() {
  }

  ngOnChanges(changes) {

    if (this.ordersList !== undefined) {
      if (this.ordersList.length < 1 ) {
        this.noOrders = true;
      } else {
        this.noOrders = false;
        let ordersCopy =  [...this.ordersList];
        this.ordersListWithFormattedDate = ordersCopy.map(item => {
          item.formattedDate = moment(item.created_at.date).format('DD-MM-YYYY');
          //goodType to short string
          item.good_type = item.good_type !== null ? `${this.text.orders.minNames.goodType[item.good_type]}` : '...';
          //trucktype formatted
          item.truck_types = item.truck_types!== null ? item.truck_types.map(tt => this.text.orders.minNames.truckTypes[tt]) : '...';
  
          return item;
        })
      }
      
    }
    
  }

}
