import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Intro2Page } from './intro2.page';

describe('Intro2Page', () => {
  let component: Intro2Page;
  let fixture: ComponentFixture<Intro2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Intro2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Intro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
