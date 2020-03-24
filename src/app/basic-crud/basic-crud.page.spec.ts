import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicCrudPage } from './basic-crud.page';

describe('BasicCrudPage', () => {
  let component: BasicCrudPage;
  let fixture: ComponentFixture<BasicCrudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCrudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
