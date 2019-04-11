import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators , FormArray, FormControl} from '@angular/forms';

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

    workoutForm: FormGroup;
    private count: number = 1;
    private anotherCount: number = 0;


  constructor(private modalCtrl: ModalController,
              public afAuth: AngularFireAuth,
              public db: AngularFirestore,
              private fb: FormBuilder,
              private navParams: NavParams){}

  ngOnInit() {
     this.workoutForm = this.fb.group({
            title: ['', Validators.compose([Validators.required])],
        });
  
        // hardcode adding regiments
    //  this.db.collection('regiments').add({
    //   session: "Stamina Workout",
    //   createdBy: this.afAuth.auth.currentUser.email,
    //   workouts:[] = [
    // {
    //   wName: 'Plank',
    //   wDuration:'10',
    //   wTimes:'0',
    // },
    // {
    //   wName: 'Bicycle Crunch',
    //   wDuration:'20',
    //   wTimes:'0',
    // },
    // {
    //   wName: 'Pullup',
    //   wDuration:'20',
    //   wTimes:'0',
    // },]
    // });
  }

  addControl(){
    this.count++;
    this.workoutForm.addControl('workout' + this.count, new FormControl('', Validators.required));
  }

  selectYpe(string){
 
    console.log(string);
    // this.anotherCount++;
    // this.workoutForm.addControl('another' + this.anotherCount, new FormControl('', Validators.required));
  }

  removeControl(control){
    this.workoutForm.removeControl(control.key);
    // this.workoutForm.removeControl(another.key);
  }
  // get workoutForms(){
  //   return this.workoutForm.get('workout') as FormArray
  // }

  // addWorkout(){
  //    const workout = this.fb.group({
  //      exercise:[],
  //    })

  //    this.workoutForms.push(workout);
  // }

  // rmWorkout(i) {
  //   this.workoutForms.removeAt(i)
  // }


  cancel(){
  this.modalCtrl.dismiss();
  }
}
 