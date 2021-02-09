import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhysiqueStatsPage } from './physique-stats.page';

describe('PhysiqueStatsPage', () => {
  let component: PhysiqueStatsPage;
  let fixture: ComponentFixture<PhysiqueStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysiqueStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhysiqueStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
