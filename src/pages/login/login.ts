import { Component, OnInit } from '@angular/core';
import { LoginInfoCard } from '../../models/login-info';
import { UserContext } from '../../models/user-context';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, LoadingController, ToastController, NavParams, ModalController, Events, AlertController, Platform, Loading } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { ForgotPasswordPage} from './forgot/forgot';
import { ChangePasswordPage} from './change/change';
import { CreateUserResponse } from '../../models/create-user-response';
import { AuthResponse } from '../../models/auth-response';
import { UserHomePage } from '../user-home/user-home';

@Component ({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage implements OnInit {
    userContext: UserContext;
    flows = {"login": "login", "signup": "signup", "forgot": "forgot", "facebook": "facebook"}
    flowName: String;
    
    passwordType: String = "password";
    loginForm: FormGroup;
    submitAttempt: boolean = false;
    
    constructor(public formBuilder: FormBuilder,
                public alertCtrl: AlertController, 
                private userService: UserService,
                private platform: Platform,
                private modalCtrl: ModalController,
                public events: Events,
                public navCtrl: NavController,
                private loadingCtrl: LoadingController,
                protected toastCtrl?: ToastController) {

    }

    togglePassword() {
        if(this.passwordType == "password") {
            this.passwordType = "text";
        } else {
            this.passwordType = "password";
        }
    }

    login() {
        console.log(JSON.stringify(this.userContext));
        this.submitAttempt = true;
        if(!this.userContext.email || !this.userContext.password) {
            this.showToast("Email and password are required fields.");
        } else {
            let loading: Loading = this.showLoading("Please wait...");
            this.userService.validate(this.userContext)
                .then((data) => this.consumeLoginResponse(data, loading))
        }
    }

    consumeLoginResponse(data: AuthResponse, loading: Loading) {
        loading.dismiss();
        console.log(JSON.stringify(data));
        if(data.valid === true) {
            this.userContext = data.context;
            if(data.isTemporary === true) {
                this.changePassword();
            } else {
                this.moveToUserHome();
            }
        } else {
            this.showAlert('Login Failed', 'Invalid credentials. Please try again.');
        }
    }

    consumeUserCreateResponse(data: CreateUserResponse, loading: Loading) {
        console.log("Create Response: " +JSON.stringify(data));
        console.log(JSON.stringify(data));
        loading.dismiss();
        if(data && data.valid === true) {
             this.userContext = data.context;
            this.moveToUserHome();
        } else {
            this.showAlert('Create Account', data.message);
        }
    }

    showAlert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

    createNewUser() {
        this.submitAttempt = true;
        if(!this.userContext.name || this.loginForm.invalid) {
            this.showToast("Name, Email and password are a required fields");
        } else {
            let loading: Loading = this.showLoading("Please wait...");
            this.userService.createNewAccount(this.userContext)
                .then((data) => this.consumeUserCreateResponse(data, loading));
        }
    }

    moveToUserHome() { 
        this.userService.setUserContext(this.userContext);
        this.navCtrl.setRoot(UserHomePage)
    }

    public showLoading(content: string): Loading {
        if (this.loadingCtrl) {
            let loading = this.loadingCtrl.create({
                content: content
            });
            loading.present();
            return loading;
        }
    }

    register() {
        this.submitAttempt = false;
        this.flowName = this.flows.signup;
    }

    ngOnInit() {
        this.submitAttempt = false;
        this.userContext = new UserContext();
        this.flowName = this.flows.login;

        let newFormGroup: FormGroup = new FormGroup({
            email: new FormControl(this.userContext.email, Validators.compose([Validators.maxLength(30), Validators.required])),
            password: new FormControl(this.userContext.password, Validators.compose([Validators.maxLength(30), Validators.required])),
            name: new FormControl(this.userContext.name, Validators.compose([Validators.maxLength(30)]))
        });
        this.loginForm = newFormGroup;
    }

    showToast(text) {
      if (this.toastCtrl) {
      let toast = this.toastCtrl.create({
        message: text,
        duration: 3000,
        position: 'top',
        dismissOnPageChange: true
        });
        return toast.present();
      }
      return null;
    }

    loginWithFacebook() {
        if(this.platform.is('cordova')) {
            this.userService.loginWithFacebook();
            this.events.subscribe('fb-login-success', context => this.handleFacebookLoginSuccess(context));
        } else {
            this.showAlert('Facebook Login', 'Please run on device for native operations.');
        }
    }

    handleFacebookLoginSuccess(data) {
        let loading: Loading = this.showLoading("Please wait...");
        this.userService.createFacebookContext(data.context)
            .then((data) => this.consumeUserCreateResponse(data, loading));
    }

    changePassword() {
        let modal = this.modalCtrl.create(ChangePasswordPage, {email: this.userContext.email});

        modal.onDidDismiss(data => {
        if(data && data.done == true) {
                this.showToast("Password Changed Successfully.");
                this.moveToUserHome();
            }
        });
        
        modal.present();
    }

    forgotPassword() {
        let modal = this.modalCtrl.create(ForgotPasswordPage);

        modal.onDidDismiss(data => {
        if(data && data.done == true) {
                this.showToast("Email sent with password reset instructions.");
            }
        });
        
        modal.present();
    }
}
