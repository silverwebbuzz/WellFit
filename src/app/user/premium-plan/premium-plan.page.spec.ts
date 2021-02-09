import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PremiumPlanPage } from './premium-plan.page';

describe('PremiumPlanPage', () => {
  let component: PremiumPlanPage;
  let fixture: ComponentFixture<PremiumPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumPlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
