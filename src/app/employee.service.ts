import { Injectable } from '@angular/core';

import PouchDB from 'pouchdb';  
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import { resolve } from 'url';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public pdb; 
  public employees :[]=[];
  postSubject: any = new Subject(); 
  createPouchDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
       this.pdb = new PouchDB('employees.db', 
        { adapter: 'cordova-sqlite' });
  }

  create(employee) {  
    return this.pdb.post(employee);
} 

update(employee) {  
  return this.pdb.put(employee);
}  

remove(employee) {  
 this.removeFromDb(employee);
 return this.postSubject;
}   

removeFromDb(employee){
  this.pdb.remove(employee).then((res)=>{
    this.read().then((emp)=>{
      this.postSubject.next(emp);
    })
   
   
  });
}

read() {  
  return new Promise((resolve,reject)=>
  //function allDocs(){
    {
             this.pdb.allDocs({ include_docs: true})
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
