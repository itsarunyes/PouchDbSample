import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BasicCrudService } from './basic-crud.service';
@Component({
  selector: 'app-basic-crud',
  templateUrl: './basic-crud.page.html',
  styleUrls: ['./basic-crud.page.scss'],
})
export class BasicCrudPage implements OnInit {
  canDelete;
  canUpdate;
  viewCtrl;
  @Input() crud: any;
  constructor(private crudService: BasicCrudService, private modalController: ModalController) {

  }
  ngOnInit() {
    if (this.crud) {
      this.canDelete = true;
      this.canUpdate = true;
    }
  }

  addOrUpdate() {


    if (this.canUpdate) {
      this.crudService.update(this.crud)
        .then(res => {
          this.modalController.dismiss(res)
        })
        .catch(() => { });
    } else {
      this.crudService.create(this.crud)
        .then((res) => {
          console.log(res);
          this.modalController.dismiss(res);
        })
        .catch(() => { });
    }
  }

  delete() {
    this.crudService.remove(this.crud)
      .catch(() => { });
  }

  goBack() {
    this.modalController.dismiss();
  }
}

