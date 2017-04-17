import { TapesComponent } from './tapes.component'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from "@angular/http"
import { RentalService } from './rental.service';
import { VhsDetailComponent } from './vhs-detail.component';
import { VhsEditComponent } from './vhs-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { tick } from "@angular/core/testing";


describe('MovieDetailComponent', () => {
    let de: DebugElement;
    let comp: VhsDetailComponent;
    let fixture: ComponentFixture<VhsDetailComponent>;
    let el: HTMLElement;

    let testTapes = [
        {
            id: 1,
            title: 'Titanic',
            director: 'James Cameron',
            genre: 'Drama',
            stars: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Bill Paxton, Gloria Stuart, Frances Fisher, Bernard Hill',
            year: 1997,
            time: 113,
            description: 'Titanic is the ginormous elephant in the room, or rather, the entire 1990s. Film nerds are reluctant to put it on a "Best Of" list, but at the same time, you\'d look like a pretentious asshole if you left it out entirely. But let\'s be honest, Titanic deserves a spot here, at the very least for its sheer magnitude. The impact of the film was overwhelming; you couldn\'t go a week without one of your peers mentioning they had seen it in theaters again, and cried just the same.',
            rented: false,
            image: 'Titanic.jpg'
        }]

    beforeEach(async(() => {
        TestBed.configureTestingModule({

            declarations: [VhsDetailComponent, VhsEditComponent],

            imports: [RouterTestingModule, FormsModule, HttpModule],

            providers: [RentalService, FormBuilder],
        })

            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VhsDetailComponent);

        comp = fixture.componentInstance;

        comp.vhs = testTapes[0];
        fixture.detectChanges();

    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should set vhs to show details from selected vhs', () => {
        comp.vhs = testTapes[0];
        expect(testTapes[0]).toBe(comp.vhs);
    });

    it('should show movie title text in h2 element', () => {
        de = fixture.debugElement.query(By.css('h2'));
        let a = de.nativeElement;
        expect(a.innerText).toMatch('Titanic');
    });

    it('should show movie year', () => {
        de = fixture.debugElement.query(By.css('#year'));
        let a = de.nativeElement;
        expect(a.innerText).toMatch('1997');
    });

    it('should show movie genre', () => {
        de = fixture.debugElement.query(By.css('#genre'));
        let a = de.nativeElement;
        expect(a.innerText).toMatch('Drama');
    });


});

