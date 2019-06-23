import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateAuthAdminRoute implements CanActivate, CanActivateChild {

    constructor() { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true;

        // if (this._authStore.isConnected() && this._authStore.isAdmin()) {
        //     return true;
        // }
        // let navigationExtras: NavigationExtras = {
        //     queryParams: {
        //         redirect: state.url
        //     }
        // };
        // this._router.navigate(['auth/signin'], navigationExtras);
        // return false;
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true;

        // if (this._authStore.isConnected() && this._authStore.isAdmin()) {
        //     return true;
        // }
        // let navigationExtras: NavigationExtras = {
        //     queryParams: {
        //         redirect: state.url
        //     }
        // };
        // this._router.navigate(['auth/signin'], navigationExtras);
        // return false;
    }
}