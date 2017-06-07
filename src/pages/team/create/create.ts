import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

//import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-team-create',
  templateUrl: 'create.html'
})
export class TeamCreatePage {
  // @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  // item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      avatar: [''],
      name: ['', Validators.required],
      email: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  // ionViewDidLoad() {

  // }

  // getPicture() {
  //   if (Camera['installed']()) {
  //     this.camera.getPicture({
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       targetWidth: 96,
  //       targetHeight: 96
  //     }).then((data) => {
  //       this.form.patchValue({ 'avatar': 'data:image/jpg;base64,' + data });
  //     }, (err) => {
  //       alert('Unable to take photo');
  //     })
  //   } else {
  //     this.fileInput.nativeElement.click();
  //   }
  // }

  // processWebImage(event) {
  //   let reader = new FileReader();
  //   reader.onload = (readerEvent) => {

  //     let imageData = (readerEvent.target as any).result;
  //     this.form.patchValue({ 'avatar': imageData });
  //   };

  //   reader.readAsDataURL(event.target.files[0]);
  // }

  // getProfileImageStyle() {
  //   return 'url(' + this.form.controls['avatar'].value + ')'
  // }

  // /**
  //  * The user cancelled, so we dismiss without sending data back.
  //  */
  cancel() {
    this.viewCtrl.dismiss();
  }

  // /**
  //  * The user is done and wants to create the item, so return it
  //  * back to the presenter.
  //  */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }



}