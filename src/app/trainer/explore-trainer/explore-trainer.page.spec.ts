import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreTrainerPage } from './explore-trainer.page';

describe('ExploreTrainerPage', () => {
  let component: ExploreTrainerPage;
  let fixture: ComponentFixture<ExploreTrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreTrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreTrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
