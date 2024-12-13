import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { listPage } from './list.page';

describe('listPage', () => {
  let component: listPage;
  let fixture: ComponentFixture<listPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [listPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(listPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
