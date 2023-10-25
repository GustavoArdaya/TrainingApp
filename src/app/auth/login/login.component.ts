import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs-compat/observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLoading$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) { }
  
  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
    //   this.isLoading = isLoading;
    // })
  }

  onSubmit(form: NgForm) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    })
  }

  // ngOnDestroy(): void {
  //   if (this.loadingSubs) {
  //     this.loadingSubs.unsubscribe();
  //   }
    
  // }
}
