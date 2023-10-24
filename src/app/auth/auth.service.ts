import { Subject } from 'rxjs-compat/Subject';
import { Injectable } from "@angular/core";
import { AuthData } from "./auth-data.model";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';

@Injectable({providedIn: "root"})
export class AuthService {

    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(
        private router: Router,
        private auth: AngularFireAuth,
        private trainingService: TrainingService,
        private uiService: UIService,
        private store: Store<{ui: fromApp.State}>) {

    }

    initAuthListener() {
        this.auth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/training']);
            } else {
                this.trainingService.cancelSubscriptions();
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isAuthenticated = false;
            }
        });
    }

    registerUser(authData: AuthData) {
        //this.uiService.loadingStateChanged.next(true);
        this.store.dispatch({type: 'START_LOADING'});
        this.auth.createUserWithEmailAndPassword(
            authData.email, 
            authData.password
            ).then(result => {
                //this.uiService.loadingStateChanged.next(false);
                this.store.dispatch({type: 'STOP_LOADING'});
            }).catch(error => {
                //this.uiService.loadingStateChanged.next(false);
                this.store.dispatch({type: 'STOP_LOADING'});
                this.uiService.showSnackbar(error.message, null, 3000);                
            });        
    }

    login(authData: AuthData) {
        //this.uiService.loadingStateChanged.next(true);
        this.store.dispatch({type: 'START_LOADING'});
        this.auth.signInWithEmailAndPassword(
            authData.email, 
            authData.password
            ).then(result => {
                //this.uiService.loadingStateChanged.next(false);
                this.store.dispatch({type: 'STOP_LOADING'});
            }).catch(error => {
                //this.uiService.loadingStateChanged.next(false);
                this.store.dispatch({type: 'STOP_LOADING'});
                this.uiService.showSnackbar(error.message, null, 3000);
            });
    } 

    logout() {
        this.auth.signOut();        
    }

    isAuth() {
        return this.isAuthenticated;      
    }
}