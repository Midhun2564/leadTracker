import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(private loginService:LoginServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.token;
    const user_id = this.loginService.user_id
    
    if(token&& user_id) {
      request = request.clone({
        setHeaders: {
          'BEARER': token,
          'USER-ID': user_id
        }
      })
    }

    return next.handle(request);
  }
}
