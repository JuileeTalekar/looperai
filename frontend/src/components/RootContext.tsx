import {createContext} from 'react';

export const RootContext = createContext({
    userId: null as string | null,
    transactions: [] as any[],
    logout: () => {},
});
