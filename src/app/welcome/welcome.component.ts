import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name:any;

  constructor(private http:HttpClient, private router: Router) {
    this.name = sessionStorage.getItem('Username');
  }

  createNewGame() {
    this.http.get('http://localhost:8080/createGame').subscribe(data => {
      console.log(data);
      if (data) {
        let game:any = data;
        sessionStorage.setItem('GameId', game.id);
        this.router.navigate(['/game']);
      }
    })
  }

  showStatistic() {
    this.router.navigate(['/statistic']);
  }

  exit() {
    sessionStorage.removeItem('Username');
    sessionStorage.removeItem('Id');
    this.router.navigate(['/greeting']);
  }
  ngOnInit(): void {
  }

}
