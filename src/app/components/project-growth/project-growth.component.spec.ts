import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGrowthComponent } from './project-growth.component';

describe('ProjectGrowthComponent', () => {
  let component: ProjectGrowthComponent;
  let fixture: ComponentFixture<ProjectGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
