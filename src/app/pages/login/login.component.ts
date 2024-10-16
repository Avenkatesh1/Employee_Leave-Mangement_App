import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj = {
    username: '',
    password: '',
  };

  apiUrl = 'https://projectapi.gerasim.in/api/EmployeeManagement/';
  http = inject(HttpClient);
  route = inject(Router);

  onLogin() {
    return this.http
      .post(this.apiUrl + 'login', this.loginObj)
      .subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('employee', JSON.stringify(res.data));
          this.route.navigate(['/Dashboard']);
        } else {
          alert(res.message);
        }
      });
  }
}
