import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (response) => (this.users = response),
      error: (error) => console.log(error),
    });
  }
}
