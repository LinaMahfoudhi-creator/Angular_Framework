import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvEmbauche } from './cv-embauche';

describe('CvEmbauche', () => {
  let component: CvEmbauche;
  let fixture: ComponentFixture<CvEmbauche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvEmbauche],
    }).compileComponents();

    fixture = TestBed.createComponent(CvEmbauche);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
