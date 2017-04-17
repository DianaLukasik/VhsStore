import { RentedTapesComponent } from './rented-tapes.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from "@angular/forms";
import { VhsEditComponent } from './vhs-edit.component';
import { VhsDetailComponent } from './vhs-detail.component';
import { PipeTransform, Pipe } from '@angular/core';
import { MovieFilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { RentedPipe } from './rented.pipe';
import { RentalService } from './rental.service';
import { HttpModule } from '@angular/http';
import { ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import 'rxjs/add/operator/toPromise';


describe('RentedTapesComponent', function () {
    let de: DebugElement;
    let comp: RentedTapesComponent;
    let fixture: ComponentFixture<RentedTapesComponent>;
    let el: HTMLElement;

    let tapeServiceStub = {
        getTapes() {
            return Promise.resolve([
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
                },
                {
                    id: 2,
                    title: 'Godzilla',
                    director: 'Roland Emmerich',
                    genre: 'Action',
                    stars: 'Matthew Broderick, Jean Reno, Maria Pitillo',
                    year: 1998,
                    time: 113,
                    description: 'A giant, reptilian monster surfaces, leaving destruction in its wake. To stop the monster (and its babies), an earthworm scientist, his reporter ex-girlfriend, and other unlikely tapes team up to save their city.',
                    rented: false,
                    image: 'Godzilla.jpg'
                },
                {
                    id: 3,
                    title: 'Home Alone',
                    director: 'Chris Columbus',
                    genre: 'Comedy',
                    stars: 'Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O\'Hara, John Heard',
                    year: 1990,
                    time: 114,
                    description: 'Kevin McAllister taught us how to dream, scheme, and turn our toys in weapons. The puny borderline-albino boy whose parents have too many other kids to keep track of to realize he is not on the plane to their vacation destination taught us that instead of not talking to creepy strangers, it\'s best to kick their ass.',
                    rented: false,
                    image: 'HomeAlone.jpg'
                }
            ])

        },
        getVhs(id: number) {
            return Promise.resolve(null);
        }

    };

    let testMovie = tapeServiceStub[0];


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RentedTapesComponent, VhsEditComponent, VhsDetailComponent, SortPipe, MovieFilterPipe, RentedPipe
            ],
            imports: [FormsModule, RouterTestingModule, HttpModule, BrowserModule ],
            providers: [RentalService]
        })
            .overrideComponent(RentedTapesComponent, {
                add: {
                    providers: [{ provide: RentalService, useValue: tapeServiceStub }]
                }
            })
            .compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(RentedTapesComponent);
        comp = fixture.debugElement.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should test onSelect method', () => {
        comp.onSelect(testMovie);
        fixture.detectChanges();
        expect(testMovie).toBe(comp.selectedVhs);
    });


})
