import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyNewsApp';

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsApi: NewsService) {

    console.log('Hello word');
  }

  ngOnInit() {

    // load articles
    this.newsApi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources
    this.newsApi.initSources().subscribe(data => this.mSources = data['sources']);

  }
  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsApi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
