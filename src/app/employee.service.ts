import { Injectable } from '@angular/core';

import PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import { resolve } from 'url';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 // public pdb;
  public employees: [] = [];
  postSubject: any = new Subject();
  pdb = new PouchDB('db');
  replicate;




  createPouchDB() {
    this.replicate = PouchDB.sync('db','http://admin:admin@127.0.0.1:5984/employee',{
      live:true,
      retry:true
    }).on('change', async function(){
    
    }).on('error', function(err){
      console.log(err)
    })
    // PouchDB.plugin(cordovaSqlitePlugin);
    // this.pdb = new PouchDB('employees.db',
    //   { adapter: 'cordova-sqlite' });
    // PouchDB.sync('db','http://admin:admin@http://127.0.0.1:5984/_utils/#database/employee',{
    //   live:true,
    //   retry:true
    // }).on('change', async function(i){
    //   this.read();
    // }).on('error', function(err){
    //   console.log(err)
    // })
  }

  create(employee) {
    return this.pdb.post(employee).then((res) => {
      return this.read();
    });
  }

  update(employee) {
    return this.pdb.put(employee).then((res) => {
      return this.read();
    });
  }

  remove(employee) {
    this.removeFromDb(employee);
    return this.postSubject;
  }

  removeFromDb(employee) {
    this.pdb.remove(employee).then((res) => {
      this.read().then((emp) => {
        this.postSubject.next(emp);
      })
    });
  }

  read() {
    return new Promise((resolve, reject) =>
    //function allDocs(){
    {
      this.pdb.allDocs({ include_docs: true })
        .then(docs => {
          this.employees = docs.rows.map(row => {
            // row.doc.Date = new Date(row.doc.Date);
            return row.doc;
          });
          resolve(this.employees);

          // this.pdb.changes({ live: true, since: 'now', include_docs: true})
          // .on('change', ()=>{
          //   this.pdb.allDocs()
          //   .then((emps)=>{
          //     this.employees = emps;
          //     resolve(this.employees);
          //     });
          // });

          //});

        });
    });

    //}

    // this.pdb.changes({ live: true, since: 'now', include_docs: true})
    //           .on('change', ()=>{
    //             allDocs()
    //             // .then((emps)=>{

    //             //   this.employees = emps;
    //             //   });
    //           });
    //return allDocs();

  }

}
