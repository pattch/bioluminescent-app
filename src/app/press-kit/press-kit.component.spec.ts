import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKitComponent } from './press-kit.component';

describe('PressKitComponent', () => {
  let component: PressKitComponent;
  let fixture: ComponentFixture<PressKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
