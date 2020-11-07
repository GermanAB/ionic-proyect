import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ResultadoTopHead, Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  noticias : Article[] = [] ;

  constructor(private newsService : NewsService) {}

  ngOnInit(){
    this.newsService.getTopHeadLines().subscribe((resp:ResultadoTopHead) => {
      //this.noticias = resp.articles;
      this.noticias.push(...resp.articles); //operador spread "..." separa los elementos del array y los agrega uno por uno
      console.log('noticias: ', this.noticias);
      
    }); 
      
  }

}
