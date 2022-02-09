import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, interval, of } from 'rxjs';
import { tap, map, mapTo, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router) { }

  submitName(name:string) {
    let headers = new HttpHeaders({ "content-type": "application/json"});
    let options = { headers: headers };
    let body = {
      "name":name,
    };
    this.http.post<any>('http://localhost:8080/greeting', body, options).subscribe( data => {
      console.log(data);
      if (data) {
        sessionStorage.setItem('Id', data.id);
        sessionStorage.setItem('Username', data.name);
        this.router.navigate(['/welcome']);
      }
    })

  }

  ngOnInit(): void {
  }

}
