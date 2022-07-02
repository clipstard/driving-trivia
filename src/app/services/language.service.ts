import { Injectable } from '@angular/core';
import { ArrayHelper } from '@helper/array.helper';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    languages = [];

    getOnlyOne() {
        return this.languages?.[0] ?? 'ro';
    }

    setOnlyOne(lang: string) {
        this.languages = [lang];
    }

    add(lang: string) {
        this.languages = ArrayHelper.unique([...this.languages, lang]);
    }
}
