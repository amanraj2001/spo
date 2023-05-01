import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjService } from './proj.service';

@Injectable({
  providedIn: 'root'
})
export class LogGuard implements CanActivate {

  constructor(private demo:ProjService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.demo.islogged();
    // return true;
  }

}
