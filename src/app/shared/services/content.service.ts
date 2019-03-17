import { Injectable, HostListener, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { mail } from "src/app/models/mail";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import * as THREE from "three";
// import { OBJLoader } from 'three/examples/js/loaders/OBJLoader';
//import * as OBJLoader from 'three-obj-loader';
import * as OBJLoader from "three-obj-loader";
OBJLoader(THREE);
import * as MTLLoader from "three-mtl-loader";
import { Object3D } from "three";

@Injectable({
  providedIn: "root"
})
export class ContentService implements OnInit {
  itemsCollection: AngularFirestoreCollection<mail>;
  Items: Observable<mail[]>;
  // private _pageCount = new BehaviorSubject<number>(0);
  // count$ = this._pageCount.asObservable();
  // af:AngularFirestore;
  // incrementPageCount(){
  //   const pageCount = this.af.object('/pageCount/').$ref
  //     .ref.transaction(count => {
  //       return count + 1;
  //     }).then((data) => {return data.snapshot.node_.value_;});

  //   return pageCount;
  // }
  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection("Items");
    this.Items = this.itemsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as mail;
          // data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  ngOnInit() {}
  getItems() {
    return this.Items;
  }

  addItem(mail: mail) {
    this.itemsCollection.add(mail);
  }
}
