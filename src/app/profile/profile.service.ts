import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public userProfile: firebase.firestore.DocumentReference,
			  public currentUser: firebase.User,) { 
  	firebase.auth().onAuthStateChanged(user => {
	    if (user) {
	      this.currentUser = user;
	      this.userProfile = firebase.firestore().doc(`/userProfile/${user.uid}`);
	    }
  	});
  }

  getUserProfile(): firebase.firestore.DocumentReference {
  return this.userProfile;
}
  updateName(firstName: string, lastName: string): Promise<any> {
  return this.userProfile.update({ firstName, lastName });
}

updateDOB(birthDate: string): Promise<any> {
  return this.userProfile.update({ birthDate });
}

}
