import { AB, BE } from '@constants/exams-categories.const';

export interface ExamsSettingsConst {
    permittedFails: number;
    time: number;
    total: number;
    success: number;
    questions: number;
}

export const EXAMS_SETTINGS: { [key: string]: ExamsSettingsConst } = {
    [AB]: {
        permittedFails: 2,
        time: 30,
        total: 0,
        success: 0,
        questions: 24,
    },
    [BE]: {
        permittedFails: 2,
        time: 30,
        total: 0,
        success: 0,
        questions: 30,
    },
};
