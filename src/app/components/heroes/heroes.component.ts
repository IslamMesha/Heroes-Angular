import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../../classes/hero';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges, OnDestroy {

  hero = 'Islam Muhammad Mesha';
  selectedHero: Hero = new Hero(0, '', 0);
  heroObj: Hero = new Hero(1, 'Islam Mesha', 23);
  heroes: Array<Hero> = [];

  // The component life cycle.
  constructor
  (
    private modalService: NgbModal
  ) {
    console.log('constructor');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    for (let i = 0; i < 5; i++) {
      const hero: Hero = new Hero(i, 'Hamadah', 20 + i);
      this.heroes.push(hero);
    }

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  selectHero(hero): void {
    console.log('You have selected: ', hero);
    this.selectedHero = hero;
  }

  addNewHero(hero: Hero): void {
    const newHero: Hero = new Hero(hero.id, hero.name, hero.age);
    this.heroes.push(newHero);
  }

  showModal(content: any) {
    this.modalService.open(content, {centered: true, size: 'sm'});
  }
}
