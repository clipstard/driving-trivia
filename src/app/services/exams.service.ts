import { Injectable } from '@angular/core';
import { StorageService } from '@app/services/storage.service';

export interface ExamsStatsInterface {
    category: string;
    total: number;
    failed: number;
    success: number;
    last: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ExamsService {

    private readonly _key = '_exams';
    private fetchedStats: ExamsStatsInterface[] = [];

    constructor(
        private storageService: StorageService,
    ) {
    }

    public static emptyStat(category: string) {
        return {
            category,
            total: 0,
            failed: 0,
            success: 0,
        } as ExamsStatsInterface;
    }

    public async getCategoryStats(category: string): Promise<ExamsStatsInterface> {
        if (!this.fetchedStats.length) {
            await this.getAll();
        }

        return this.getByCategory(category);
    }

    public async getAll(): Promise<ExamsStatsInterface[]> {
        const data = await this.storageService.get(this._key);
        this.fetchedStats = JSON.parse(data);
        return this.fetchedStats;
    }

    public addFailed(category: string) {

    }

    private getByCategory(category: string): ExamsStatsInterface {
        return this.fetchedStats.find(i => i.category === category) || ExamsService.emptyStat(category);
    }

}
