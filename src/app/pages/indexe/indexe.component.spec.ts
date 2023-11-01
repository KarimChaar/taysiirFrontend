import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexeComponent } from './indexe.component';

describe('IndexeComponent', () => {
  let component: IndexeComponent;
  let fixture: ComponentFixture<IndexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
