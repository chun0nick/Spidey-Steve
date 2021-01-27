import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadlistComponent } from './spreadlist.component';

describe('SpreadlistComponent', () => {
  let component: SpreadlistComponent;
  let fixture: ComponentFixture<SpreadlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
