import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { WorkoutAddPage } from './workout-add/workout-add.page';
// import { WorkoutPlayPage } from './workout-play/workout-play.page';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {

  alarms=[];

  constructor(public afAuth: AngularFireAuth,
  			      public mc: ModalController,	
              public db: AngularFirestore,) { }

  ngOnInit() {
    this.db.collection('alarms').stateChanges().subscribe(serverAlarms =>{
      this.alarms=[];
      serverAlarms.forEach(a=>{
        let alarm:any = a.payload.doc.data();
        alarm.id = a.payload.doc.id;
        this.alarms.push(alarm);
      });
    });
  }

  async add() {
    const modal = await this.mc.create({
      component: WorkoutAddPage,
      backdropDismiss: false,
    });
    return await modal.present();
  }


  // async play() {
  //   const modal = await this.mc.create({
  //     component: WorkoutAddPage,
  //     backdropDismiss: false,
  //   });
  //   return await modal.present();
  // }
} 
