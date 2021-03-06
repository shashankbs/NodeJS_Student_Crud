import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req, next) {
    const token = localStorage.getItem('jwt');
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
      },
    });
    return next.handle(tokenizedRequest);
  }
}
