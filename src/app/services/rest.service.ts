import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable()
export class RestService {

  constructor(private afd: AngularFirestore) { }

  getAll(path)
  {
     return this.afd.collection(path).valueChanges();
  }
}
