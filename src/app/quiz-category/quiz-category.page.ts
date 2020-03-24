import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuizCategoryService } from './quiz-category.service';
@Component({
  selector: 'app-quiz-category',
  templateUrl: './quiz-category.page.html',
  styleUrls: ['./quiz-category.page.scss'],
})
export class QuizCategoryPage implements OnInit {
  canDelete;
  canUpdate;
  viewCtrl;
  @Input() quizCategory: any;
  constructor(private quizCategoryService: QuizCategoryService, private modalController: ModalController) {

  }
  ngOnInit() {
    if (this.quizCategory.name) {
      this.canDelete = true;
      this.canUpdate = true;
    }
  }

  addOrUpdate() {
    if (this.canUpdate) {
      this.quizCategoryService.update(this.quizCategory)
        .then(res => {
          this.modalController.dismiss(res)
        })
        .catch(() => { });
    } else {
      this.quizCategoryService.create(this.quizCategory)
        .then((res) => {
          console.log(res);
          this.modalController.dismiss(res);
        })
        .catch(() => { });
    }
  }

  delete() {
    this.quizCategoryService.remove(this.quizCategory)
      .catch(() => { });
  }

  goBack() {
    this.modalController.dismiss();
  }
}
