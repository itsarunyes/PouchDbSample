import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import {Constants} from './../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizCategoryService {
  public quizCategorys: [] = [];
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

  create(quizCategory) {
    return this.pdb.post(quizCategory).then((res) => {
      return this.read();
    });
  }

  update(quizCategory) {
    return this.pdb.put(quizCategory).then((res) => {
      return this.read();
    });
  }

  remove(quizCategory) {
    this.removeFromDb(quizCategory);
    return this.postSubject;
  }

  removeFromDb(quizCategory) {
    this.pdb.remove(quizCategory).then((res) => {
      this.read().then((emp) => {
        this.postSubject.next(emp);
      })
    });
  }

  read() {
    return new Promise((resolve, reject) => {
      this.pdb.allDocs({ include_docs: true })
        .then(docs => {
          this.quizCategorys = docs.rows.map(row => {
            return row.doc;
          });
          resolve(this.quizCategorys);
        });
    });

  }

}




