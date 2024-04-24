import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidCardComponent } from './asteroid-card.component';

describe('AsteroidCardComponent', () => {
  let component: AsteroidCardComponent;
  let fixture: ComponentFixture<AsteroidCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsteroidCardComponent]
    });
    fixture = TestBed.createComponent(AsteroidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
