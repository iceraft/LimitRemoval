import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alarm-edit',
  templateUrl: './alarm-edit.page.html',
  styleUrls: ['./alarm-edit.page.scss'],
})
export class AlarmEditPage implements OnInit {
  alarms = [];
  alarmForm: FormGroup;
  

  constructor(private modalCtrl: ModalController,
              public afAuth: AngularFireAuth,
              public db: AngularFirestore,
              private fb: FormBuilder,
              private navParams: NavParams)
  {
    this.alarmForm = this.fb.group({
            title: ['', Validators.compose([Validators.required])],
            time: ['', Validators.compose([Validators.required])],
            days: ['', Validators.compose([Validators.required])]
        });
  };

  ngOnInit() {
    this.alarms = [];
    this.alarms =  this.navParams.get('alarm');
  }
  cancel(){
  this.modalCtrl.dismiss();
  }
  onSubmit(){
    this.db.doc('alarms/'+this.alarms['id']).update({
      timestamp: new Date(),
    })
    this.modalCtrl.dismiss(this.alarms);
  }
}