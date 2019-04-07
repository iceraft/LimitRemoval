import { Component, OnInit } from '@angular/core';
// import { ProfileService } from  './profile.service'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	user ={};
	userId = "";

  constructor( public afAuth: AngularFireAuth,
  			   public db: AngularFirestore,	) { 
  	  this.afAuth.authState.subscribe(user=>{
  		if(user){
  			this.user = user;
  			this.userId = user.uid;
  			this.db.collection(`users/`+this.userId+`/userProfile`).add({
		  		age : "",
		  		weight: "",
		  		height: "",
		  		times: 1,
		  	})
  			console.log(this.userId);
  			}
  		})
  }

  ngOnInit() {  	

  }

  onViewDidLoad(){

  
  }
}
