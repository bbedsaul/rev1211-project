import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprintdayPopupComponent } from './sprintday-popup.component';

describe('SprintdayPopupComponent', () => {
  let component: SprintdayPopupComponent;
  let fixture: ComponentFixture<SprintdayPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SprintdayPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SprintdayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
