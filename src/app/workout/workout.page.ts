// import { Component, OnInit } from '@angular/core';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { ModalController } from '@ionic/angular';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { WorkoutAddPage } from './workout-add/workout-add.page';
// // import { WorkoutPlayPage } from './workout-play/workout-play.page';


// @Component({
//   selector: 'app-workout',
//   templateUrl: './workout.page.html',
//   styleUrls: ['./workout.page.scss'],
// })
// export class WorkoutPage implements OnInit {

//   myRegiments: [];
//   regiments: [];
//   alarms: [];

//   constructor(public afAuth: AngularFireAuth,
//   			      public mc: ModalController,	
//               public db: AngularFirestore,) { }

//   ngOnInit() {
//     this.db.collection('alarms').stateChanges().subscribe(serverAlarms =>{
//       this.alarms=[];
//       serverAlarms.forEach(a=>{
//         let alarm:any = a.payload.doc.data();
//         alarm.id = a.payload.doc.id;
//         this.alarms.push(alarm);
//       });
//     });


//     this.db.collection('regiments').snapshotChanges().subscribe(serverRegi =>{
//       this.regiments=[];
//       serverRegi.forEach(a=>{
//          let regiment:any = a.payload.doc.data();
//          regiment.id = a.payload.doc.id;
//         //type never wtf is that shit bruh?
//         //this.regiments.push(a.payload.doc.data());
//         console.log(a);
//         console.log(this.regiments);
//       });
//     });
//   }

//   async add() {
//     const modal = await this.mc.create({
//       component: WorkoutAddPage,
//       backdropDismiss: false,
//     });
//     return await modal.present();
//   }


//   // async play() {
//   //   const modal = await this.mc.create({
//   //     component: WorkoutAddPage,
//   //     backdropDismiss: false,
//   //   });
//   //   return await modal.present();
//   // }
// } 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { WorkoutAddPage } from './workout-add/workout-add.page';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {
  
  regiments = [];

  constructor(private db: AngularFirestore,
              private mc: ModalController,
              public afAuth: AngularFireAuth,) { }


 ngOnInit() {
this.db.collection('regiments').snapshotChanges().subscribe(serverRegi =>{
      this.regiments=[];
      serverRegi.forEach(a=>{
         let regiment:any = a.payload.doc.data();
         regiment.id = a.payload.doc.id;
        //type never wtf is that shit bruh?
        this.regiments.push(regiment);
        console.log(a);
        console.log(this.regiments);
      });
    });

  };

  

  async add() {
    const modal = await this.mc.create({
      component: WorkoutAddPage,
      backdropDismiss: false,
    });
    return await modal.present();
  }

  // delete(alarm){
  //     this.db.doc('alarms/'+alarm.id).delete();
  // }
 
  //  async edit(alarm) {
  //   const modal = await this.modalCtrl.create({
  //     component: AlarmEditPage,
  //     backdropDismiss: false,
  //     componentProps: {
  //     alarm: alarm,
  //  }
  //   });
  //   return await modal.present();
  //  }
}
