import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxEllipsisTooltipComponent} from './ngx-ellipsis-tooltip.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {SimpleChange} from "@angular/core";

describe('NgxEllipsisTooltipComponent', () => {
  let component: NgxEllipsisTooltipComponent;
  let fixture: ComponentFixture<NgxEllipsisTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [MatTooltipModule]
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

  it('should display name with ellipsis', () => {
    component.ngOnChanges({text: new SimpleChange('', "Long name that should be reduced after some time but let's wait", false)})
    fixture.detectChanges();
    expect(component.contentLeft).toEqual("Long name that should be reduced after some time but let's");
    expect(component.contentRight).toEqual(" wait");
  });
});
