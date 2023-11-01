import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentindexComponent } from './documentindex.component';

describe('DocumentindexComponent', () => {
  let component: DocumentindexComponent;
  let fixture: ComponentFixture<DocumentindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
