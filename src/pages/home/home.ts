import { FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';


import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemList: FirebaseListObservable<any[]>;
  newItem = '';

 constructor(public navCtrl: NavController, public alertCtrl: AlertController, public firebaseService: FirebaseServiceProvider, public actionSheetCtrl: ActionSheetController) {
  	this.itemList = this.firebaseService.getItemList();
 }

  

 addItem(){
 	this.firebaseService.addItem(this.newItem);

 }

 removeItem(id){

 	this.firebaseService.removeItem(id);
 }


}