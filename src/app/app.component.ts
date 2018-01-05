import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';
// import { CacheService } from './services/cache.service';
import { NuarCacheService } from './services/nuar-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private data: any;
  constructor(private httpClient: HttpClient, private cacheService: NuarCacheService) { }

  ngOnInit(): void {
  }

  public callApi() {
    this.cacheService.get('users', this.httpClient.get('https://jsonplaceholder.typicode.com/posts'))
      .subscribe(data => console.log('call', data), error => console.log('call error'));
  }

  public showCache() {
    console.log('show cache click');
    this.cacheService.get
    this.cacheService.get('users')
      .subscribe(data => console.log('From cache click', data));
  }

  public clearCache() {
    console.log('clear cache click');
    this.cacheService.remove('users');
  }

}
