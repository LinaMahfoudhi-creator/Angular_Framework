import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoDay } from './todo-day';

describe('TodoDay', () => {
  let component: TodoDay;
  let fixture: ComponentFixture<TodoDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDay],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
