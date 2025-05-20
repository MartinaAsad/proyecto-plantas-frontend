import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInicioDashboardComponent } from './info-inicio-dashboard.component';

describe('InfoInicioDashboardComponent', () => {
  let component: InfoInicioDashboardComponent;
  let fixture: ComponentFixture<InfoInicioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoInicioDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoInicioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
