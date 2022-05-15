import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private _storage: Storage | null = null;

    constructor(
        private storage: Storage,
    ) {
    }

    async init() {
        this._storage = await this.storage.create();
    }

    public async set(key: string, value: any) {
        await this._storage?.set(key, value);
    }

    public get(key: string): Promise<any> {
        return this._storage.get(key);
    }
}
