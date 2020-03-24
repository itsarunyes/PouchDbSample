import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizTypePage } from './quiz-type.page';

describe('QuizTypePage', () => {
  let component: QuizTypePage;
  let fixture: ComponentFixture<QuizTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
