import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Observable } from 'rxjs/internal/Observable';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(
    private _dataStorageService: DataStorageService,
    protected authService: AuthService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  authenticated() {
    return this.authService.isAuthenticated();
  }

  onSaveData() {
    this._dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this._dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
