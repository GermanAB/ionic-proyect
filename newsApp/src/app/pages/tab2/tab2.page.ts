import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article, ResultadoTopHead } from '../../interfaces/interfaces';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @ViewChild(IonSegment) segment : IonSegment;
  noticias : Article[] = [] ;
  categorias = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

  constructor(private newsService : NewsService) {}


  ngOnInit(){
    this.newsService.getCategories(this.categorias[0]);
    this.segment.value = this.categorias[0]   
  }

  getCategorias(categoria:string){
    console.log(categoria)
  }
}
