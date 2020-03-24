import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizTypeListPage } from './quiz-type-list.page';

describe('QuizTypeListPage', () => {
  let component: QuizTypeListPage;
  let fixture: ComponentFixture<QuizTypeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTypeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizTypeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
