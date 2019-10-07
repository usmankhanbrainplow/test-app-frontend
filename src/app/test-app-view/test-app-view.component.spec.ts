import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppViewComponent } from './test-app-view.component';

describe('TestAppViewComponent', () => {
  let component: TestAppViewComponent;
  let fixture: ComponentFixture<TestAppViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAppViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
