import { Component, OnInit,Input } from '@angular/core';
import { NavParams,NavController,ModalController } from '@ionic/angular';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: 'employee.page.html',
  styleUrls: ['employee.page.scss']
})
export class EmployeePage implements OnInit {
 // employee: any = {};
  canDelete;
  canUpdate;
  navParams;
  viewCtrl;   
  @Input() employee: any;
  constructor(navParams: NavParams, private employeeService: EmployeeService, private modalController: ModalController) {

  }
ngOnInit(){
   // var employee = this.navParams.get('employee');
    if(this.employee){
            this.canDelete = true;
            this.canUpdate = true;
    }
}

    addOrUpdate() {


        if (this.canUpdate) {
            this.employeeService.update(this.employee)
            .then(res=>{
               // this.viewCtrl.dismiss(res);
               // this.navCtrl.pop();
                this.modalController.dismiss(res)
            })
                .catch(()=>{});
        } else {
            this.employeeService.create(this.employee)
            .then((res)=>{
                console.log(res);
                this.modalController.dismiss(res);
               // this.navCtrl.pop()
              //  this.viewCtrl.dismiss(res);
            })
                .catch(()=>{});
        }

       
    }

    delete() {
        this.employeeService.remove(this.employee)
            .catch(()=>{});

        }

    goBack(){
        this.modalController.dismiss();
    }



}