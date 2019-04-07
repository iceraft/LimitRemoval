import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlarmAddPage } from './alarm-add/alarm-add.page';
import { AlarmEditPage } from './alarm-edit/alarm-edit.page';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.page.html',
  styleUrls: ['./alarm.page.scss'],
})
export class AlarmPage implements OnInit {
	
  alarms = [];

  constructor(private db: AngularFirestore,
              private modalCtrl: ModalController,
              public afAuth: AngularFireAuth,) { }


  ngOnInit() {
    this.db.collection('alarms').stateChanges().subscribe(serverAlarms =>{
      this.alarms=[];
      serverAlarms.forEach(a=>{
        let alarm:any = a.payload.doc.data();
        alarm.id = a.payload.doc.id;
        this.alarms.push(alarm);
      });
    });

  };

  

  async add() {
    const modal = await this.modalCtrl.create({
      component: AlarmAddPage,
      backdropDismiss: false,
    });
    return await modal.present();
  }

  delete(alarm){
      this.db.doc('alarms/'+alarm.id).delete();
  }
 
   async edit(alarm) {
    const modal = await this.modalCtrl.create({
      component: AlarmEditPage,
      backdropDismiss: false,
      componentProps: {
      alarm: alarm,
   }
    });
    return await modal.present();
   }
}
