import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbreImagemComponent } from './abre-imagem.component';

describe('AbreImagemComponent', () => {
  let component: AbreImagemComponent;
  let fixture: ComponentFixture<AbreImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbreImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbreImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
