import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  username: string = '';
  password: string = '';
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSignup() {
    this.apiService.Signup(this.username, this.password).subscribe(
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
