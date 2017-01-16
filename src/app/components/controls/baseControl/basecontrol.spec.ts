import {TestBed, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BaseControlComponent} from './basecontrol.component';
import {By} from '@angular/platform-browser';

describe('basecontrol component', () => {

  let comp: BaseControlComponent;
  let fixture: ComponentFixture<BaseControlComponent>;
  let de: DebugElement;
  let el: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        BaseControlComponent
      ],
      providers: [
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(BaseControlComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('input'));
    el = de.nativeElement;       
  });

  it('should render masked value', () => {
    TestBed.compileComponents().then(() => {
      comp.restrict = 'numeric';
      comp.mask = '__-___';
      comp.value = '20200';
      fixture.detectChanges();
      expect(el.value).toEqual('20-200');
    });
  });
});
