import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEllipsisTooltipComponent } from './ngx-ellipsis-tooltip.component';

describe('NgxEllipsisTooltipComponent', () => {
  let component: NgxEllipsisTooltipComponent;
  let fixture: ComponentFixture<NgxEllipsisTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxEllipsisTooltipComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEllipsisTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
