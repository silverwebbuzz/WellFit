import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentErrorPage } from './payment-error.page';

describe('PaymentErrorPage', () => {
  let component: PaymentErrorPage;
  let fixture: ComponentFixture<PaymentErrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentErrorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
