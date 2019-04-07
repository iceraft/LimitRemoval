import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alarm-add',
  templateUrl: './alarm-add.page.html',
  styleUrls: ['./alarm-add.page.scss'],
})
export class AlarmAddPage implements OnInit {

  alarmForm: FormGroup;

  constructor(private modalCtrl: ModalController,
              public afAuth: AngularFireAuth,
              public db: AngularFirestore,
              private fb: FormBuilder)
  {
    this.alarmForm = this.fb.group({
            title: ['', Validators.compose([Validators.required])],
            time: ['', Validators.compose([Validators.required])],
            days: ['', Validators.compose([Validators.required])]
        });
  };

  ngOnInit() {

  }
  cancel(){
  this.modalCtrl.dismiss();
  }
  onSubmit(){
    this.db.collection('alarms').add({
      title: this.alarmForm.get('title').value,
      time: this.alarmForm.get('time').value,
      days: this.alarmForm.get('days').value,
      created_at: new Date(),
    })
    console.log(this.alarmForm.get('title').value);
    console.warn(this.alarmForm.value);
    this.modalCtrl.dismiss();
  }
}
