import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreSubPage } from './explore-sub.page';

describe('ExploreSubPage', () => {
  let component: ExploreSubPage;
  let fixture: ComponentFixture<ExploreSubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreSubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreSubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
