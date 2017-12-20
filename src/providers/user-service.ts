import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UserContext } from '../models/user-context';
import { Events } from 'ionic-angular';
import { Subject } from "rxjs/subject";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/Rx';
import { OnboardValidationResponse } from '../models/onboard-response';
import { OnboardContext } from '../models/onboard-context';
import { Facebook, FacebookLoginResponse } from 'ionic-native';
import { AuthResponse } from '../models/auth-response';
import { CreateUserResponse } from '../models/create-user-response';
import { Device } from '@ionic-native/device';
import { UserReward } from '../models/user-reward';
import { UserPromotions } from '../models/user-promo';
import { Profile } from '../models/profile';

import 'rxjs/add/operator/toPromise';

const FB_APP_ID: number = 2106264809601802;

@Injectable()
export class UserService {
    private actualBaseUrl = "http://restaurants-be.herokuapp.com/v1/user/";
    // private actualBaseUrl = "http://localhost:8080/v1/user/";
    private actualProfileUrl = "http://restaurants-be.herokuapp.com/v1/profile";
    private createPath = "create";
    private createFbContextPath = "create/fbcontext";
    private authPath = "auth";
    private authChangePath = "auth/change";
    private generateAuthPath = "auth/generate?email=";
    private logoutPath = "auth/destroy?email=";
    private sessionPath = "session";
    private rewardsPath = "/promos?session=";
    private profilePath = "?session=";
    private profileSave = "/save?session=";
    private context = new BehaviorSubject<UserContext>(null);
    private _context = this.context.asObservable();

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, public events: Events, private device: Device) { 
        
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    saveProfile(profile: Profile): Promise<void> {
        let url = this.actualProfileUrl + this.profileSave + this.context.getValue().session;
        return this.http.post(url, profile, this.options)
            .toPromise()
            .then(Promise.resolve);
    }

    getUserProfile(): Promise<Profile> {
        let url = this.actualProfileUrl + this.profilePath + this.context.getValue().session;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Profile)
            .catch(response => response.json() as Profile);
    }

    getRewards(): Promise<UserReward[]> {
        let url = this.actualProfileUrl + this.rewardsPath + this.context.getValue().session;
        let data = this.getDeviceInfo();
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as UserReward[])
            .catch(() => []);
    }

    init() {
        let url = this.actualBaseUrl + this.sessionPath;
        let data = this.getDeviceInfo();
        this.http.post(url, data, this.options)
            .toPromise()
            .then(response => {
                this.setUserContext(response.json() as UserContext)
            })
            .catch(() => console.log("error"));
    }

    setUserContext(context) {
        this.context.next(context);
    }

    getUserContext(): Observable<UserContext> {
        return this._context;
    }

    getContextObject(): UserContext {
        return this.context.getValue();
    }

    logout(): Promise<void> {
        this.context.next(null);
        return Promise.resolve();
    }

    changePassword(email: String, password: String): Promise<AuthResponse> {
        let url: string = this.actualBaseUrl + this.authChangePath;

        let data = {
            email: email,
            password: password,
            device: this.getDeviceInfo(),
        };       

        return this.http.post(url, data, this.options)
            .toPromise()
            .then(response => response.json() as AuthResponse)
            .catch(response => response.json() as AuthResponse);
    }

    resetPassword (email: string): Promise<void> {
        let url: string = this.actualBaseUrl + this.generateAuthPath;      

        return this.http.post(url + email, this.options)
            .toPromise()
            .then(() => Promise.resolve());
    }

    killSession(): Promise<void> {
        let url: string = this.actualBaseUrl + this.logoutPath;      

        return this.http.post(url + this.context.getValue().email, this.options)
            .toPromise()
            .then(() => {
                this.setUserContext(null);
                Promise.resolve()
            });
    }

    validate(context: UserContext): Promise<AuthResponse> {
        let url: string = this.actualBaseUrl + this.authPath;

        let data = {
            email: context.email,
            password: context.password,
            device: this.getDeviceInfo(),
        };       

        return this.http.post(url, data, this.options)
            .toPromise()
            .then(response => response.json() as AuthResponse)
            .catch(response => response.json() as AuthResponse);
    }

    getDeviceInfo() {
        if(this.device.uuid) {
            return {
                uuid: this.device.uuid,
                manufacturer: this.device.manufacturer,
                serial: this.device.serial
            }
        } else {
            return {
                uuid: "1234567890",
                manufacturer: "APPLE",
                serial: "0987654321"
            }
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

    loginWithFacebook() {
        let success: boolean = false;
        Facebook.login(['public_profile', 'user_friends', 'email'])
        .then((res: FacebookLoginResponse) =>
            {
                console.log('Logged into Facebook!', JSON.stringify(res));
                Facebook.api('me?fields=first_name,last_name,email,picture,gender', null)
                    .then(profileData => this.createUserContextFromFBContext(profileData))
                    .catch(e => {
                        console.log('Error logging into Facebook', e);
                         Promise.reject(null);
                    });
            }
        )
        .catch(e => {
            console.log('Error logging into Facebook', e);
            Promise.reject(null);
        });
    }

    createFacebookContext(context): Promise<CreateUserResponse> {
        let url: string = this.actualBaseUrl + this.createFbContextPath;

        let data = {
            email: context.email,
            name: context.name,
            password: context.password,
            device: this.getDeviceInfo(),
            facebookHandle: context.facebookHandle,
            photo: context.photo
        };       

        console.log("data: " +JSON.stringify(data));

        return this.http.post(url, data, this.options)
            .toPromise()
            .then(response => response.json() as CreateUserResponse)
            .catch(response => response.json() as CreateUserResponse);
    }

    createNewAccount(context): Promise<CreateUserResponse> {
        let url: string = this.actualBaseUrl + this.createPath;

        let data = {
            email: context.email,
            name: context.name,
            password: context.password,
            device: this.getDeviceInfo()
        };       

        return this.http.post(url, data, this.options)
            .toPromise()
            .then(response => response.json() as CreateUserResponse)
            .catch(response => response.json() as CreateUserResponse);
    }

    createUserContextFromFBContext(profileData) {
        console.log(JSON.stringify(profileData));
        let context = new UserContext;
        context.name = profileData.first_name + ' ' + profileData.last_name;
        context.email = profileData.email;
        context.photo = profileData.picture.data.url;
        context.facebookHandle = profileData.id;

        this.events.publish('fb-login-success', {'context': context});
    }
}