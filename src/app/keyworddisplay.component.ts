import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';




@Component({
    selector: 'keyword-repos',
    template: `
               <h2>Keyword Repositories</h2>
               <h3>{{errorMsg}}</h3>
               <div id="w">
               <input type="text" name="ghkeyword" id="ghkeyword" placeholder="Github Keyword" #searchBox1>
               
                    <input id="keywordsubmitbtn" type="submit" (click)="searchKeywords(searchBox1.value)" value="Get Keyword Data">
               </div>
             
             
               <ul *ngFor="let repo of repos1">
                    <li>{{repo.name}}</li>
                    <li>{{repo.id}}</li>
                    


               </ul>

               
    `,
    styleUrls: ['./app.component.css'],
})



export class KeywordDisplayComponent{
    repos1 = [];
    errorMsg: string;



    constructor(private _searchService: SearchService){}


    searchKeywords(term:string){
        this._searchService.searchKeywords(term)
            .subscribe( resReposData => this.repos1 = resReposData.items,
            resReposError => this.errorMsg = resReposError);
    }
}