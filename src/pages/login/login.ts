import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { HomePage } from '../home/home';

import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  fireauth = firebase.auth();

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleglus: GooglePlus, public af: AngularFireModule ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  googleauth(){

  	this.googleglus.login({
      'webClientId' : '531788288658-jebq264elq8348ntvk8vmir5imsjlrml.apps.googleusercontent.com'
    })
  	.then((res) =>{
  		const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
      this.fireauth.signInWithCredential(firecreds).then((res)=> {
        this.navCtrl.setRoot(HomePage);
      }).catch((err) => {
        alert('Firebase auth failed' + err);
      })
  		
  	}).catch((err) =>{
  		alert("Error "+ err);
  	});
  }

}
