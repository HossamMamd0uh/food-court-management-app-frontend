import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-stores-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoresListComponent implements OnInit {

  stores: any;
  currentStore = null;
  currentIndex = -1;
  storeName = '';

  constructor(private StoreService: StoreService,private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.retrieveStores();
  }

  retrieveStores(): void {
    this.StoreService.getAll()
      .subscribe(
        data => {
          this.stores = data.data ;
          
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveStores();
    this.currentStore = null;
    this.currentIndex = -1;
  }

  setActiveStore(store, index): void {
    this.currentStore = store;
    this.currentIndex = index;
  }

  deleteStore(): void {
    this.StoreService.delete(this.currentStore._id)
      .subscribe(
        response => {
          this.refreshList()
        },
        error => {
          console.log(error);
        });
  }

  removeAllStores(): void {
    this.StoreService.deleteAll()
      .subscribe(
        response => {
          
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.StoreService.findByTitle(this.storeName)
      .subscribe(
        data => {
          this.stores = data.data;
          
        },
        error => {
          console.log(error);
        });
  }
}
