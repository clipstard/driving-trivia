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

    public keys() {
        return this._storage.keys();
    }

    async init() {
        this._storage = await this.storage.create();
        console.log('set storage');
    }

    public async set(key: string, value: any) {
        await this._storage?.set(key, value);
    }

    public get(key: string): Promise<any> {
        console.log(`get key ${key}`);
        return this._storage.get(key);
    }
}
