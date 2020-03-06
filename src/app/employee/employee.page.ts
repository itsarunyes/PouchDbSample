import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: 'employee.page.html',
  styleUrls: ['employee.page.scss']
})
export class EmployeePage implements OnInit {
  employee: any = {};
  canDelete;
  canUpdate;
  navParams;
  viewCtrl;   
  constructor(navParams: NavParams, private employeeService: EmployeeService) {

  }
ngOnInit(){
    var employee = this.navParams.get('employee');
    if(employee){
            this.employee = employee;
            this.canDelete = true;
            this.canUpdate = true;
    }
}

    addOrUpdate() {


        if (this.canUpdate) {
            this.employeeService.update(this.employee)
                .catch(()=>{});
        } else {
            this.employeeService.create(this.employee)
                .catch(()=>{});
        }

        this.viewCtrl.dismiss(this.employee);
    }

    delete() {
        this.employeeService.remove(this.employee)
            .catch(()=>{});

        this.viewCtrl.dismiss(this.employee);
    }



}