import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RainbowWriter } from './rainbow-writer';

describe('RainbowWriter', () => {
  let component: RainbowWriter;
  let fixture: ComponentFixture<RainbowWriter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainbowWriter],
    }).compileComponents();

    fixture = TestBed.createComponent(RainbowWriter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
