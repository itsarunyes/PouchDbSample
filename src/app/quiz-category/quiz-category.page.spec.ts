import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizCategoryPage } from './quiz-category.page';

describe('QuizCategoryPage', () => {
  let component: QuizCategoryPage;
  let fixture: ComponentFixture<QuizCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
