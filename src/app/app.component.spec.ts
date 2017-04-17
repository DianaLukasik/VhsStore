import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './test/router-stubs';

describe('AppComponent', function () {
  let de: DebugElement[];
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;
  let head: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent, RouterLinkStubDirective, RouterOutletStubComponent]
    }).overrideComponent(AppComponent, {}).compileComponents();
  }));

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent, RouterLinkStubDirective, RouterOutletStubComponent]
    })
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.queryAll(By.css('a'));
  });

  it('should create component', () => {
    expect(comp).toBeDefined()
  });

  it('should have expected <h1> text', () => {
    head = fixture.debugElement.query(By.css('h1'));
    el = head.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(' VHS STORE  ');

  });

  it('should have expected link value', () => {
    fixture.detectChanges();
    const h1 = de[0].nativeElement;
    const h2 = de[1].nativeElement;
    expect(h1.outerHTML).toContain('ng-reflect-link-params="/tapes"');
    expect(h2.outerHTML).toContain('ng-reflect-link-params="/rented"');
  });
});