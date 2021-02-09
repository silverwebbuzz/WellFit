import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainerChatPage } from './trainer-chat.page';

describe('TrainerChatPage', () => {
  let component: TrainerChatPage;
  let fixture: ComponentFixture<TrainerChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
