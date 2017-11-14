import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserContext } from '../models/user-context';
import { Events } from 'ionic-angular';
import { Subject } from "rxjs/subject";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/Rx';
import { OnboardValidationResponse } from '../models/onboard-response';
import { OnboardContext } from '../models/onboard-context';
import { Facebook, FacebookLoginResponse } from 'ionic-native';

import 'rxjs/add/operator/toPromise';

const FB_APP_ID: number = 1218138474966242;

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

    createContext(context): Promise<Boolean> {
        this.context.next(context);
        return Promise.resolve(true);
    }

    getUserContext(): Observable<UserContext> {
        return this._context;
    }

    createDummyContext() : UserContext {
        let context = new UserContext;
        context.username = "gagandeepghai";
        context.email = "gagdeep@gmail.com";
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

    loginWithFacebook() : boolean{
        let success: boolean = false;
        Facebook.login(['public_profile', 'user_friends', 'email'])
        .then((res: FacebookLoginResponse) =>
            {
                console.log('Logged into Facebook!', JSON.stringify(res));
                Facebook.api('me?fields=first_name,last_name,email,picture,gender', null)
                    .then(profileData => this.createUserContextFromFBContext(profileData))
                    .then(() => this.events.publish('fb-login-success'))
                    .catch(e => console.log('Error logging into Facebook', e));
            }
        )
        .catch(e => console.log('Error logging into Facebook', e));

        return success;
    }

    createUserContextFromFBContext(profileData) {
        console.log(JSON.stringify(profileData));
        let context = new UserContext;
        context.name = profileData.first_name + profileData.last_name;
        context.email = profileData.email;
        context.photo = profileData.picture.data.url;
        context.isFacebook = true;

        this.context.next(context);
        return Promise.resolve()
    }
}