import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private afs: AngularFirestore) {}

  collection$(path: string, query?) {
    return this
    .afs.collection(path, query)
    .valueChanges({idField: true});
  }

  doc$(path: string): Observable<any> {
    return this
    .afs.doc(path)
    .snapshotChanges()
    .pipe(
      map(doc => {
        return { id: doc.payload.id , ...doc.payload.data };
      })
    );
  }

  /**
   * @param path 'collection' or 'collection/docID'
   * @param data new data
   */
  updateAt(path: string, data: any): Promise<any> {
    const segments = path.split('/').filter( v => v );
    if (segments.length % 2) {
      // Collection
      return this.afs.collection(path).add(data);
    } else {
      return this.afs.doc(path).set(data, { merge: true });
    }
  }

  delete(path) {
    return this.afs.doc(path).delete();
  }
}
