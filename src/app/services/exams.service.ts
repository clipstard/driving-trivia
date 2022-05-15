import { Injectable } from '@angular/core';
import { StorageService } from '@app/services/storage.service';
import { EXAMS_CATEGORIES } from '@constants/exams-categories.const';

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

    public async ensureCategoriesExists() {
        EXAMS_CATEGORIES.forEach(cat => {
            this.getByCategory(cat);
        });

        await this.saveStats();
    }

    public getByCategory(category: string): ExamsStatsInterface {
        let stat = this.fetchedStats.find(i => i.category === category);
        if (!stat) {
            stat = ExamsService.emptyStat(category);
            this.fetchedStats.push(stat);
        }

        return stat;
    }

    public async getAll(): Promise<ExamsStatsInterface[]> {
        const data = await this.storageService.get(this._key);
        this.fetchedStats = JSON.parse(data);
        return this.fetchedStats;
    }

    public addFailed(category: string) {
        this.add(category, 'failed');
    }

    public addSuccess(category: string) {
        this.add(category, 'success');
    }

    private add(category, result) {
        let i = -1;
        this.fetchedStats.forEach((item, index) => {
            if (item.category === category) {
                i = index;
            }
        });

        if (i === -1) {
            i = this.fetchedStats.length;
            this.fetchedStats.push(ExamsService.emptyStat(category));
        }

        this.fetchedStats[i][result]++;
        this.fetchedStats[i].total++;

        this.saveStats();
    }

    private saveStats(): Promise<void> {
        return this.storageService.set(this._key, JSON.stringify(this.fetchedStats));
    }

}
