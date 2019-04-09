import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-workout-add',
  templateUrl: './workout-add.page.html',
  styleUrls: ['./workout-add.page.scss'],
})
export class WorkoutAddPage implements OnInit {
  workouts: any[] = [
    {
      wName: 'Crunch',
      wType: 'Interval'
    },
    {
      wName: 'Plank',
      wType: 'Time'
    },
    {
      wName: 'Pullup',
      wType: 'Interval'
    },
     {
      wName: 'Squats',
      wType: 'Interval'
    },
    {
      wName: 'Rope Skip',
      wType: 'Time'
    },
    {
      wName: 'Wall Sit',
      wType: 'Time'
    },
    {
      wName: 'Bicycle Crunch',
      wType: 'Interval'
    },
    {
      wName: 'Burpee',
      wType: 'Interval'
    },
    {
      wName: 'Pushup',
      wType: 'Interval'
    },]
  constructor(private modalCtrl: ModalController,
              public afAuth: AngularFireAuth,
              public db: AngularFirestore,
              private fb: FormBuilder,
              private navParams: NavParams){}

  ngOnInit() {
  }

  cancel(){
  this.modalCtrl.dismiss();
  }
}
 