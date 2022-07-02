export class ArrayHelper {
    static unique<T = any>(arr: T[]) {
        const res = [];
        arr.forEach(item => {
            if (!res.includes(item)) {
                res.push(item);
            }
        });

        return res;
    }
}
