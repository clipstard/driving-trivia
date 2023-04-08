import { CanDeactivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { from, Observable, of } from 'rxjs'


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<any> {

    constructor(
    ) {
    }

    canDeactivate(): Observable<boolean> {
        console.log('can deactivate')
        return of(true)
    }
}
