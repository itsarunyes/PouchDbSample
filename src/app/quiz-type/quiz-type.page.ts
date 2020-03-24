import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuizTypeService } from './quiz-type.service';
@Component({
  selector: 'app-quiz-type',
  templateUrl: './quiz-type.page.html',
  styleUrls: ['./quiz-type.page.scss'],
})
export class QuizTypePage implements OnInit {
  canDelete;
  canUpdate;
  viewCtrl;
  @Input() quizType: any;
  constructor(private quizTypeService: QuizTypeService, private modalController: ModalController) {

  }
  ngOnInit() {
    if (this.quizType.name) {
      this.canDelete = true;
      this.canUpdate = true;
    }
  }

  addOrUpdate() {
    if (this.canUpdate) {
      this.quizTypeService.update(this.quizType)
        .then(res => {
          this.modalController.dismiss(res)
        })
        .catch(() => { });
    } else {
      this.quizTypeService.create(this.quizType)
        .then((res) => {
          console.log(res);
          this.modalController.dismiss(res);
        })
        .catch(() => { });
    }
  }

  delete() {
    this.quizTypeService.remove(this.quizType)
      .catch(() => { });
  }

  goBack() {
    this.modalController.dismiss();
  }
}
