import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EllipsisTooltipComponent} from './ellipsis-tooltip.component';

describe('EllipsisTooltipComponent', () => {
  let component: EllipsisTooltipComponent;
  let fixture: ComponentFixture<EllipsisTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EllipsisTooltipComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
