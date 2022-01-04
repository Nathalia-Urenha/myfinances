import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './services/api';

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProvider{
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;



export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProvider){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput){
       api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

