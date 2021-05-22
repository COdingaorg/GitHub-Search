import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitResultsComponent } from './git-results.component';

describe('GitResultsComponent', () => {
  let component: GitResultsComponent;
  let fixture: ComponentFixture<GitResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
