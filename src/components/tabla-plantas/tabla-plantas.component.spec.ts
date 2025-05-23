import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPlantasComponent } from './tabla-plantas.component';

describe('TablaPlantasComponent', () => {
  let component: TablaPlantasComponent;
  let fixture: ComponentFixture<TablaPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPlantasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
