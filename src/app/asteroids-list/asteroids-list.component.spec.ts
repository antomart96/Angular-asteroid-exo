import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsListComponent } from './asteroids-list.component';

describe('AsteroidsListComponent', () => {
  let component: AsteroidsListComponent;
  let fixture: ComponentFixture<AsteroidsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsteroidsListComponent]
    });
    fixture = TestBed.createComponent(AsteroidsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
