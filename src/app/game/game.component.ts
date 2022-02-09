import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from '@angular/router';

export interface TurnHistory {
  id:number;
  name:any;
  chooseNumber:number;
  gameNumber:number;
  status:any;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameNumber:any;
  history:TurnHistory[] = [];
  h:any;
  isEnd:any;
  winner:any;

  constructor(private http:HttpClient, private router: Router) {
    this.gameNumber = sessionStorage.getItem('GameNumber');
  }

  startGame() {
    this.http.get('http://localhost:8080/startGame/' + sessionStorage.getItem("GameId")).subscribe(data => {
      console.log(data);
      if (data) {
        let num:any = data;
        sessionStorage.setItem('GameNumber', num);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
        });
      }
    })
  }

  newTurn(choose:string) {
    console.log(choose);
    let headers = new HttpHeaders({ "content-type": "application/json"});
    let options = { headers: headers };
    let body = {
      "game_id":sessionStorage.getItem("GameId"),
      "player_id":sessionStorage.getItem("Id"),
      "chooseNumber":choose,
      "gameNumber":this.gameNumber
    };
    console.log(body);
    this.http.post<any>('http://localhost:8080/newTurn', body, options).subscribe( data => {
      console.log(data);
      if (data) {
        let num:any = data;
        sessionStorage.setItem('GameNumber', num);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
        });
      }
    })
  }

  checkWin() {
    this.http.get('http://localhost:8080/check/' + sessionStorage.getItem("GameId")).subscribe(data => {
      this.isEnd = data;
      console.log(this.isEnd);
      if (this.isEnd) {
        this.getWinner();
      }
    })
  }

  exit() {
    sessionStorage.removeItem("GameId");
    sessionStorage.removeItem("GameNumber");
    this.router.navigate(['/welcome']);
  }

  getHisroty() {
    this.http.get('http://localhost:8080/statistic/turn/' + sessionStorage.getItem("GameId")).subscribe(data => {
      console.log(data);
      this.history = [];
      this.h = data;
      for (let o of this.h) {
        this.history.push(<TurnHistory>{id:o.id, name:o.player.name, chooseNumber:o.chooseNumber, gameNumber:o.gameNumber, status:o.status});
      }
      console.log(this.history);

    })
  }

  getWinner() {
    this.http.get('http://localhost:8080/check/winner/' + sessionStorage.getItem("GameId")).subscribe(data => {
      console.log(data);
      this.winner = data;
    })
  }

  ngOnInit(): void {
    if (this.gameNumber) {
      this.checkWin();
      this.getHisroty();
    }
  }

}
