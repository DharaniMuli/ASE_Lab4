import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchterm: '';
  gender: string;
  accuracy:string;
  constructor( private http: HttpClient, public afAuth: AngularFireAuth, private toast: ToastController) { }

  ngOnInit() {
  }
 ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid)
      {
        this.toast.create({
          message: 'Welcome to APP_Name, ${data.email}',
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
          message: 'Could not find authencation Details',
          duration: 3000
        }).present();

      }
    });
 }
  checkGender() {
    const url = 'https://gender-api.com/get?name=' + this.searchterm + '&key=XJzxKUMnEXdfqDNhlp';
    this.http.get(url).subscribe(data => {
        this.gender = 'The person with the given name is likely to be a ' + data.gender;
        this.accuracy = 'Accuracy:' + data.accuracy;
    });
  }
}
