import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifiedPage } from './verified.page';

describe('VerifiedPage', () => {
  let component: VerifiedPage;
  let fixture: ComponentFixture<VerifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
