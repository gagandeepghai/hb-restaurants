import { Component, OnInit } from '@angular/core';
import { LoginInfoCard } from '../../models/login-info';
import { UserContext } from '../../models/user-context';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, LoadingController, ToastController, NavParams, ModalController, Events, AlertController, Platform } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { ForgotPasswordPage} from './forgot/forgot';

@Component ({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage implements OnInit {
    userContext: UserContext;
    cards: LoginInfoCard[] = [];
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
        this.submitAttempt = true;
        if(this.loginForm.invalid) {
            this.showToast("Email and password are required fields.");
        } else {
            this.userService.validate(this.userContext)
                .then((data) => this.moveToUserHome(data))
        }
    }

    createNewUser() {
        this.submitAttempt = true;
        if(this.loginForm.invalid) {
            this.showToast("Email and password are required fields.");
        } else {
            this.userService.createContext(this.userContext)
                .then((data) => this.moveToUserHome(data));
        }
    }

    moveToUserHome(data: Boolean) { 

    }

    register() {
        this.submitAttempt = false;
        this.flowName = this.flows.signup;
    }
    ngOnInit() {
        this.cards.push(this.getCard('CONNECT', 'Get latest and exclusive offers.', 'notifications'));
        this.cards.push(this.getCard('TELL', 'Contact with feedback and reviews.', 'chatbubbles'));
        this.cards.push(this.getCard('EARN', 'Earn rewards on every order.', 'card'));

        this.submitAttempt = false;
        this.userContext = new UserContext();
        this.flowName = this.flows.login;

        let newFormGroup: FormGroup = new FormGroup({
            email: new FormControl(this.userContext.email, Validators.compose([Validators.maxLength(30), Validators.required])),
            password: new FormControl(this.userContext.password, Validators.compose([Validators.maxLength(30), Validators.required])),
            name: new FormControl(this.userContext.name, Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required]))
        });
        this.loginForm = newFormGroup;
    }

    getCard(what: String, description: String, icon: String): LoginInfoCard {
        let card = new LoginInfoCard();
        card.what = what;
        card.description = description;
        card.class = 'cl-' + what;
        card.icon = icon;
        return card;
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
            this.events.subscribe('fb-login-success', () => this.handleFacebookLoginSuccess());
        } else {
            let alert = this.alertCtrl.create({
                title: 'Facebook Login',
                subTitle: 'Please run on device for native operations.',
                buttons: ['OK']
            });
            alert.present();
        }
    }

    handleFacebookLoginSuccess() {
        this.moveToUserHome(true);
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
