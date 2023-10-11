import { Subject } from 'rxjs-compat/Subject';

import { Injectable } from "@angular/core";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable({providedIn: "root"})
export class AuthService {

    authChange = new Subject<boolean>();
    user: User | null = {
        email: "",
        userId: ""
    }

    constructor() {

    }

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authChange.next(true);
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authChange.next(true);
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }
}