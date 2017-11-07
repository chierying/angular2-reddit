import {Component, Input, OnInit} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article;

  constructor() {
  }

  ngOnInit() {
  }

  voteUp() {
    this.article.voteUp();
  }

  voteDown() {
    this.article.voteDown();
  }
}
