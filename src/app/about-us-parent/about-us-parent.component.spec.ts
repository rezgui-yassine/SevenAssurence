import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsParentComponent } from './about-us-parent.component';

describe('AboutUsParentComponent', () => {
  let component: AboutUsParentComponent;
  let fixture: ComponentFixture<AboutUsParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsParentComponent]
    });
    fixture = TestBed.createComponent(AboutUsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
