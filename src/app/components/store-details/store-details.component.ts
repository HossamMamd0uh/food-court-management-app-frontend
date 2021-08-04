import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  currentStore = null;
  message = '';

  constructor(
    private StoreService: StoreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getStore(this.route.snapshot.paramMap.get('id'));
  }

  getStore(id): void {
    this.StoreService.get(id)
      .subscribe(
        data => {
          this.currentStore = data;
          
        },
        error => {
          console.log(error);
        });
  }


  updateStore(): void {
    this.StoreService.update(this.currentStore.data._id, this.currentStore.data)
      .subscribe(
        response => {
          
          this.message = 'The store was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteStore(): void {
    this.StoreService.delete(this.currentStore.data._id)
      .subscribe(
        response => {
          
          this.router.navigate(['/stores']);
        },
        error => {
          console.log(error);
        });
  }
}
