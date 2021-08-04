import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  storeData = {
    storeName: '',
    storeDescription: '',
    storeLogo: ''
  };
  submitted = false;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }

  saveStore(): void {
    const store = {
      storeName: this.storeData.storeName,
      storeDescription: this.storeData.storeDescription,
      storeLogo: this.storeData.storeLogo
    };

    this.storeService.create(store)
      .subscribe(
        store => {
          this.submitted = true;
        },
        error => {
          
        });
  }

  newStore(): void {
    this.submitted = false;
    this.storeData = {
      storeName: '',
      storeDescription: '',
      storeLogo: ''
    };
  }

}
