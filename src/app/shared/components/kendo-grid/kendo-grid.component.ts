import { Component, OnInit } from '@angular/core';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { products } from './products';
import { process, State, SortDescriptor, orderBy } from '@progress/kendo-data-query';
@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss']
})
export class KendoGridComponent implements OnInit {
  public columns: any[] = [{ field: "ProductID" }, { field: "ProductName" }, { field: "QuantityPerUnit" }];
  public pageSize: number = 20;
  public state: State = {
    skip: 0,
    take: 20,
  }
  public sort: SortDescriptor[];
  public gridData: GridDataResult = process(products, this.state);
  constructor() { }

  ngOnInit() {
  }
  /**
   * Handles filtering
   * @param state 
   */
  dataStateChange(state: DataStateChangeEvent) {
    this.state = state;
    this.gridData = process(products, this.state);
  }
  /**
   * Handles sorting
   * @param sort 
   */
  sortChange(sort: SortDescriptor[]) {
    this.sort = sort;
    this.loadProducts();
  }
  /**
   * Loads all products
   */
  loadProducts() {
    this.gridData = {
      data: orderBy(products, this.sort),
      total: products.length
    };
  }
  /**
   * Changes page
   */
  changePage() {
    this.gridData = {
      data: products.slice(this.state.skip, this.state.skip + this.pageSize),
      total: products.length
    };
  }
  /**
   * Handles page change event
   * @param event 
   */
  pageChange({skip, take}: PageChangeEvent) {
    this.state.skip = skip;
    this.pageSize = take;
    this.changePage();
  }

}
