import { Injectable } from '@angular/core';
import { StorageService } from '@app/services/storage.service';

@Injectable({
    providedIn: 'root',
})
export class StatsService {

    private readonly _key = '_stats';

    constructor(
        private storageService: StorageService,
    ) {
    }

    public async set(value: any) {
        await this.storageService.set(this._key, value);
    }

    public get(): Promise<any> {
        return this.storageService.get(this._key);
    }
}
