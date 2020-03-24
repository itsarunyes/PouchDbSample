import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import {Constants} from './../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizTypeService {
  public quizTypes: [] = [];
  postSubject: any = new Subject();
  pdb = new PouchDB('quizcategory');
  replicate;
  constructor() { }

  createPouchDB() {
    this.replicate = PouchDB.sync('quizcategory', Constants.dburl + 'quizcategory', {
      live: true,
      retry: true
    }).on('change', async function () {

    }).on('error', function (err) {
      console.log(err)
    })
  }

  create(quizType) {
    return this.pdb.post(quizType).then((res) => {
      return this.read();
    });
  }

  update(quizType) {
    return this.pdb.put(quizType).then((res) => {
      return this.read();
    });
  }

  remove(quizType) {
    this.removeFromDb(quizType);
    return this.postSubject;
  }

  removeFromDb(quizType) {
    this.pdb.remove(quizType).then((res) => {
      this.read().then((emp) => {
        this.postSubject.next(emp);
      })
    });
  }

  read() {
    return new Promise((resolve, reject) => {
      this.pdb.allDocs({ include_docs: true })
        .then(docs => {
          this.quizTypes = docs.rows.map(row => {
            return row.doc;
          });
          resolve(this.quizTypes);
        });
    });

  }

}

