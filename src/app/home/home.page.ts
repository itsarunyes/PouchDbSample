import { Component,OnInit  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeePage } from './../employee/employee.page';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public employees : any;
  constructor(public modalCtrl: ModalController, public employeeService : EmployeeService) {


  }
    ngOnInit() {

            this.employeeService.createPouchDB();
          //   let employee = {
          //     'firstName':'arun',
          //     'lastName':'s'
          //   }
          //  this.employeeService.create(employee);
            this.employeeService.read().then(employees => {
                    this.employees = employees;
                })
                .catch((err)=>{});

    }

    async showDetails(employee) {
      console.log(employee);
        let modal =  await this.modalCtrl.create({
        component: EmployeePage,
         componentProps: employee,
        // cssClass: yourclass
      });
      modal.present();
    }  

    deleteEmp(e,emp){
e.preventDefault();
delete emp.Date;
this.employeeService.remove(emp).subscribe((posts) => {
  console.log(posts);
});;
    }

    addEmp(){
      this.showDetails('');
    }
}