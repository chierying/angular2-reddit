import {Component} from '@angular/core';
import {Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement): boolean {
    console.log(`Adding article title:${newTitle.value}, link:${newLink.value}`);
    this.articles.push(new Article(newTitle.value, newLink.value, 0));
    newTitle.value = '';
    newLink.value = '';
    return false;
  }

  sortedArticle(): Article[] {
    return this.articles.sort((a, b) => b.votes - a.votes);
  }
}
