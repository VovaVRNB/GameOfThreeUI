import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';

export interface GameHistory {
  id:number;
  winner:any;
  loser:any;
}

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  history:GameHistory[] = [];
  h:any;

  constructor(private http:HttpClient, private router: Router) { }

  getGames() {
    this.http.get('http://localhost:8080/statistic/winGame/' + sessionStorage.getItem("Id")).subscribe(data => {
      console.log(data);
      this.h = data;
      for (let o of this.h) {
        this.history.push(<GameHistory>{id:o.id, winner:o.winner.name, loser:o.loser.name});
      }
    })
    this.http.get('http://localhost:8080/statistic/lostGame/' + sessionStorage.getItem("Id")).subscribe(data => {
      console.log(data);
      this.h = data;
      for (let o of this.h) {
        this.history.push(<GameHistory>{id:o.id, winner:o.winner.name, loser:o.loser.name});
      }
    })
    console.log(this.history);
  }

  exit() {
    this.router.navigate(['/welcome']);
  }

  ngOnInit(): void {
    this.getGames();
  }

}
