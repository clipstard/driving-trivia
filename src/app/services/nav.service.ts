import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class NavService {
    static baseHref = '/';

    currentUrl: string;
    constructor(
        private router: Router,
    ) {
        this.currentUrl = router.url;
        this.pushNav();
        console.log({curr: this.currentUrl});
    }

    pushNav() {
        this.router.events.pipe(
            filter(e => e instanceof NavigationStart),
        ).subscribe((e: NavigationStart) => {
            this.currentUrl = e.url;
        });
    }

    public showBack() {
        return this.currentUrl !== NavService.baseHref;
    }
}
