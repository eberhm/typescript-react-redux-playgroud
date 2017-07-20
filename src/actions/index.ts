export type Action  =
    {
        type: 'RESET_COUNTER'
    } |
    {
        type: 'INCREMENT_COUNTER';
        delta: number;
    };

export const incrementCounter = (delta: number):Action => ({ type: 'INCREMENT_COUNTER', delta });
export const resetCounter = ():Action => ({ type: 'RESET_COUNTER' });