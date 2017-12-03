import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoadingController, Loading, ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { UserService } from '../../../providers/user-service';
import { Profile } from '../../../models/profile';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})

export class UserProfile implements OnInit {
    profile: Profile = null;
    editForm: FormGroup;
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    successMessage = "Profile Updated Successfully.";
    failureMessage = "Unable to save. Please try later.";

    constructor(private viewCtrl: ViewController,
                private userService: UserService,
                public formBuilder: FormBuilder,
                private loadingCtrl: LoadingController,
                protected toastCtrl?: ToastController) {
      
    }

    ngOnInit() {
        let loading: Loading = this.showLoading("Please wait...");
        this.userService.getUserProfile().then(data => {
          this.profile = data;
          this.createEditForm();
          loading.dismiss();
       });
    }

    save() {
        this.userService.saveProfile(this.profile)
            .then(() => this.showToast(this.failureMessage))
            .catch(() => this.showToast(this.successMessage));
    }

    showToast(message: string) {
      if (this.toastCtrl) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top',
        dismissOnPageChange: true
        });
        return toast.present();
      }
      return null;
    }
    
    createEditForm() {
        console.log ("Profile: " +JSON.stringify(this.profile));
        this.editForm = new FormGroup({
            email: new FormControl(this.profile.email),
            name: new FormControl(this.profile.name),
            phone: new FormControl(this.profile.phone),
            anniversary: new FormControl(this.profile.anniversary),
            birthday: new FormControl(this.profile.birthday)
        });
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
    
    dismiss(data): void {
      this.viewCtrl.dismiss(data); 
    }
}