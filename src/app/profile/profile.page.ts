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
        if(user) {
            this.user = user;
            this.userId = user.uid;
            console.log(this.user);
            console.log(this.userId);
	  		// this.db.collection(`users/`+this.userId+`/userProfile`).add({
			  // 		age : "",
			  // 		weight: "",
			  // 		height: "",
			  // 		times: 1,
		  	// })
			this.db.collection(`users`, ref => ref.where('users', "==", this.userId)).snapshotChanges().subscribe(res => {
			    if (res.length > 0)
			    {
			    	console.log(res);
			    console.log(this.db.collection(`users`));
			    console.log(ref=> ref.where('users', "==", this.userId));	
			    console.log("Match found.");
			    }
			    else
			    {
			    				    	console.log(res);
			    console.log(this.db.collection(`users`));
			    console.log(ref=> ref.where('users', "==", this.userId));	
			    console.log("Does not exist.");
			    }
			});

		  	// console.log(this.db.firestore.doc('users/'+this.userId).get());
     		//console.log(this.db.firestore.doc(`users/`+this.userId).get());
            return this.db.firestore.doc(`users/`+this.userId).get(); 
        }
    })
    // // .then( data => {
    //     // db.firestore.doc return data should be heres
    //     console.log(data, data.exists);
    // });

  // 	  this.afAuth.authState.subscribe(user=>{
  // 		if(user) {
  // 			this.user = user;
  // 			this.userId.id = user.uid;
  // 			this.userId.exist = true;
  // 			// if(this.userId.id !== ""){
  // 			// 	this.db.collection(`users/`+this.userId.id+`/userProfile`).add({
		// 	  // 		age : "",
		// 	  // 		weight: "",
		// 	  // 		height: "",
		// 	  // 		times: 1,
		//   	// })
  // 			// }

  // 			// if(!this.db.doc(`users/`+this.userId).ref.get()){
	 //  		// 	this.db.collection(`users/`+this.userId+`/userProfile`).add({
		// 	  // 		age : "",
		// 	  // 		weight: "",
		// 	  // 		height: "",
		// 	  // 		times: 1,
		//   	// })
  // 			// }
  // // 		!db.doc(`users/`+this.userId).ref.get().then((documentSnapshot) => {
  // // 			this.db.collection(`users/`+this.userId+`/userProfile`).add({
		// // 	  		age : "",
		// // 	  		weight: "",
		// // 	  		height: "",
		// // 	  		times: 1,
		// //   	})
		// // });
		// this.db.doc(`users/`+this.userId)
		//   .update({})
		//   .then(() => {
		//   	console.log("Match found.");
		//     // update successful (document exists)
		//   })
		//   .catch((error) => {
		//     // console.log('Error updating user', error); // (document does not exists)
		//    //  this.db.collection(`users/`+this.userId+`/userProfile`).add({
		// 	  // 		age : "",
		// 	  // 		weight: "",
		// 	  // 		height: "",
		// 	  // 		times: 1,
		//   	// })

 	// 	 });
 	// 	this.db.firestore.doc(`users/`+this.userId.id).get()
  //     .then(docSnapshot => {
  //       if(this.userId.id == "") {
  //       	console.log(docSnapshot.exists);
  //       	console.log(docSnapshot);
  //         this.db.collection(`users/`+this.userId.id+`/userProfile`).add({
		// 	  		age : "",
		// 	  		weight: "",
		// 	  		height: "",
		// 	  		times: 1,
		//   	})
  //       }
  //       });
  // 	}
  //   })

  }

  ngOnInit() {  	

  }

  onViewDidLoad(){

  
  }
}
