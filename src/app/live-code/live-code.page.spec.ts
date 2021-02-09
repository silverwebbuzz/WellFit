import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveCodePage } from './live-code.page';

describe('LiveCodePage', () => {
  let component: LiveCodePage;
  let fixture: ComponentFixture<LiveCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
