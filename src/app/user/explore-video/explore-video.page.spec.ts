import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreVideoPage } from './explore-video.page';

describe('ExploreVideoPage', () => {
  let component: ExploreVideoPage;
  let fixture: ComponentFixture<ExploreVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
