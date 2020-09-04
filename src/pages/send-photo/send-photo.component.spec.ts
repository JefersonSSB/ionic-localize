import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPhotoComponent } from './send-photo.component';

describe('SendPhotoComponent', () => {
  let component: SendPhotoComponent;
  let fixture: ComponentFixture<SendPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
