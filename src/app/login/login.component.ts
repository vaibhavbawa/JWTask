import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-your-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.apiService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        // Handle success, such as navigating to a new page
      },
      (error: any) => {
        console.error('Login failed:', error);
        // Handle error, display an error message, etc.
      }
    );
  }
}