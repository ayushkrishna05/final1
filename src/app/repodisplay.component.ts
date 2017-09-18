import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';




@Component({
    selector: 'public-repos',
    template: `
               <h2>Public Repositories</h2>
               <h3>{{errorMsg}}</h3>
               <div id="w">
                    <input type="text" name="ghusername" id="ghusername" placeholder="Github user" #searchBox>
                    <input id="ghsubmitbtn" type="submit" (click)="searchUsers(searchBox.value)" value="Get User Data">
                    
               </div>
            <h2>{{repos[1].owner.login}}</h2> 
            <div>
               <ul *ngFor="let repo of repos">
                    <li>{{repo.name}}</li>
                    
               </ul>
            </div>

               
    `,
    styleUrls: ['./app.component.css'],
})



export class RepoDisplayComponent{
    repos = [];
    errorMsg: string;



    constructor(private _searchService: SearchService){}

    searchUsers(term:string){
        this._searchService.searchUsers(term)
            .subscribe( resReposData => this.repos = resReposData,
            resReposError => this.errorMsg = resReposError);
    }

    searchKeywords(term:string){
        this._searchService.searchKeywords(term)
            .subscribe( resReposData => this.repos = resReposData.items,
            resReposError => this.errorMsg = resReposError);
    }
}