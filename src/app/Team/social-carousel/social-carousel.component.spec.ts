import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCarouselComponent } from './social-carousel.component';

describe('SocialCarouselComponent', () => {
  let component: SocialCarouselComponent;
  let fixture: ComponentFixture<SocialCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
