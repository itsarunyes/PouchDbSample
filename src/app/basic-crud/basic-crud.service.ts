import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import {Constants} from './../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicCrudService {

  public cruds: [] = [];
  postSubject: any = new Subject();
  pdb = new PouchDB('db');
  replicate;
  constructor() { }

  createPouchDB() {
    this.replicate = PouchDB.sync('db', Constants.dburl + 'crud', {
      live: true,
      retry: true
    }).on('change', async function () {

    }).on('error', function (err) {
      console.log(err)
    })
  }

  create(crud) {
    return this.pdb.post(crud).then((res) => {
      return this.read();
    });
  }

  update(crud) {
    return this.pdb.put(crud).then((res) => {
      return this.read();
    });
  }

  remove(crud) {
    this.removeFromDb(crud);
    return this.postSubject;
  }

  removeFromDb(crud) {
    this.pdb.remove(crud).then((res) => {
      this.read().then((emp) => {
        this.postSubject.next(emp);
      })
    });
  }

  read() {
    return new Promise((resolve, reject) => {
      this.pdb.allDocs({ include_docs: true })
        .then(docs => {
          this.cruds = docs.rows.map(row => {
            return row.doc;
          });
          resolve(this.cruds);
        });
    });

  }

}

