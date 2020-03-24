import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuizTypePage } from './../quiz-type/quiz-type.page';
import { QuizTypeService } from '../quiz-type/quiz-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-type-list',
  templateUrl: './quiz-type-list.page.html',
  styleUrls: ['./quiz-type-list.page.scss'],
})
export class QuizTypeListPage implements OnInit {
  public quizTypes: any;
  constructor(public modalCtrl: ModalController, public quizTypeService: QuizTypeService, private router: Router) {


  }
  ngOnInit() {

    this.quizTypeService.createPouchDB();
    this.quizTypeService.read().then(quizTypes => {
      this.quizTypes = quizTypes;
    })
      .catch((err) => { });

  }

  async showDetails(quizType) {
    console.log(quizType);
    let modal = await this.modalCtrl.create({
      component: QuizTypePage,
      componentProps: { quizType: quizType },
    });
    
    modal.onDidDismiss().then((res)=>{
      if(res.data){
        this.quizTypes = res.data;
      }
    });
    modal.present();

  }

  deleteType(e, cat) {
    e.preventDefault();
    delete cat.Date;
    this.quizTypeService.remove(cat).subscribe((cat) => {
      this.quizTypes =cat;
    });;
  }

  addType() {
    this.showDetails({});
  }

  goBack() {
    this.router.navigate(['/home'])
  }
}