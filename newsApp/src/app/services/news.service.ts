import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apikey = environment.apy_key;
const apiurl = environment.url;
const topHeadLines = environment.top_head_lines;


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private http : HttpClient) { }

  private ejecutarQuery(query : string){
    query = apiurl+query
    return this.http.get(query);
  }

  getTopHeadLines(){
    this.ejecutarQuery( topHeadLines+`?country=mx&apikey=${apikey}` )
    // return this.http.get<ResultadoTopHead>(apiurl+topHeadLines+`?country=mx&apikey=${apikey}`);
    }

  getCategories(category : string){
    this.ejecutarQuery( topHeadLines+`?country=mx&apikey=${apikey}category${category}`)
  }
}
