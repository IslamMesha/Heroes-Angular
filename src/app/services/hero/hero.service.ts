import {Injectable} from '@angular/core';
import {Hero} from '../../classes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  static getHeroes(): Array<Hero> {
    return [];
  }
}
