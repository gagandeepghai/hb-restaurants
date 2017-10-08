import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserContext } from '../models/user-context';
import { Events } from 'ionic-angular';
import { Subject } from "rxjs/subject";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/Rx';
import { OnboardValidationResponse } from '../models/onboard-response';
import { OnboardContext } from '../models/onboard-context';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private searchUrl = 'api/users/1';
    private context = new BehaviorSubject<UserContext>(null);
    // private context = new BehaviorSubject<UserContext>(this.createDummyContext());
    private _context = this.context.asObservable();

    constructor(private http: Http, public events: Events) { 
        
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    createContext(context): Promise<void> {
        this.context.next(context);
        return Promise.resolve();
    }

    getUserContext(): Observable<UserContext> {
        return this._context;
    }

    createDummyContext() : UserContext {
        let context = new UserContext;
        context.username = "gagandeepghai";
        context.email = "gagdeep@gmail.com";
        context.restaurantName = "Punj'aabs";
        return context;
    }

    createUser(userContext: UserContext): Promise<void> {
        this.createContext(userContext);
        return Promise.resolve();
    }

   getContextObject(): UserContext {
        return this.context.getValue();
    }

    logout(): Promise<void> {
        this.context.next(null);
        return Promise.resolve();
    }

    validate(userContext: UserContext): Promise<boolean> {
        if(userContext.username =="gagandeep" && userContext.password=="password") {
            this.createContext(this.createDummyContext());
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }

    validateOnboard(onboardContext: OnboardContext): Promise<OnboardValidationResponse> {
        let response: OnboardValidationResponse = new OnboardValidationResponse();
        if(onboardContext.onboardKey == "punjab" && onboardContext.onboardPasscode == 1234) {
            response.valid = true;
            response.restaurant = "Punj'aabs";
        } else {
            response.valid = false;
        }
        return Promise.resolve(response);
    }
}