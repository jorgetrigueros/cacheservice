import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

interface CacheContent {
  expiry: number;
  value: any;
}

@Injectable()
export class NuarCacheService {
  private cache: Map<string, CacheContent> = new Map<string, CacheContent>();
  // readonly DEFAULT_MAX_AGE: number = 300000000;
  readonly DEFAULT_MAX_AGE: number = 0;

  constructor() { }

  /**
   * Gets the value from cache if the key is provided.
   */
  get(key: string, fallback?: Observable<any>, maxAge?: number): Observable<any> {
    if (!maxAge) {
      maxAge = this.DEFAULT_MAX_AGE;
    }
    debugger;
    if (this.hasValidCachedValue(key)) {
      console.log('Gettin from cache:', key);
      return Observable.of(this.cache.get(key).value);
    } else {
      return fallback.do(
        (value) => {
          console.log('From call Api:', value);
          this.set(key, value, maxAge);
        }, error => {
          console.log('error');
        }
      );
    }

  }

  /**
   * Sets the value with key in the cache
   * Notifies all observers of the new value
   */
  set(key: string, value: any, maxAge: number = this.DEFAULT_MAX_AGE): void {
    const expiry = (maxAge === 0 ? 0 : Date.now() + maxAge);
    this.cache.set(key, { value: value, expiry: expiry });
  }

  /**
   * Checks if the a key exists in cache
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }

  /**
   * Remove if the key exists in cache
   */
  remove(key: string) {
    this.cache.delete(key);
  }

  /**
   * Remove all key in cache
   */
  removeAll() {
    this.cache.clear();
  }

  /**
   * Checks if the key exists and   has not expired.
   */
  private hasValidCachedValue(key: string): boolean {
    console.log(this.cache);
    if (this.cache.has(key)) {
      if ((this.cache.get(key).expiry < Date.now()) && (this.cache.get(key).expiry !== 0)) {
        this.cache.delete(key);
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

}
