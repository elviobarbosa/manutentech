import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeuticsSnackbarComponent } from './terapeutics-snackbar.component';

describe('TerapeuticsSnackbarComponent', () => {
  let component: TerapeuticsSnackbarComponent;
  let fixture: ComponentFixture<TerapeuticsSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeuticsSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeuticsSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
