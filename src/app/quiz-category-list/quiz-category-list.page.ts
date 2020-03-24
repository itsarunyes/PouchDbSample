import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuizCategoryPage } from './../quiz-category/quiz-category.page';
import { QuizCategoryService } from '../quiz-category/quiz-category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz-category-list',
  templateUrl: './quiz-category-list.page.html',
  styleUrls: ['./quiz-category-list.page.scss'],
})
export class QuizCategoryListPage implements OnInit {
  public quizCategories: any;
  constructor(public modalCtrl: ModalController, public quizCategoryService: QuizCategoryService, private router: Router) {


  }
  ngOnInit() {

    this.quizCategoryService.createPouchDB();
    this.quizCategoryService.read().then(quizCategories => {
      this.quizCategories = quizCategories;
    })
      .catch((err) => { });

  }

  async showDetails(quizCategory) {
    console.log(quizCategory);
    let modal = await this.modalCtrl.create({
      component: QuizCategoryPage,
      componentProps: { quizCategory: quizCategory },
    });

    modal.onDidDismiss().then((res) => {
      if (res.data) {
        this.quizCategories = res.data;
      }
    });
    modal.present();

  }

  deleteCategory(e, cat) {
    e.preventDefault();
    delete cat.Date;
    this.quizCategoryService.remove(cat).subscribe((cat) => {
      this.quizCategories = cat;
    });;
  }

  addCategory() {
    this.showDetails({});
  }

  goBack() {
    this.router.navigate(['/home'])
  }
}