import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          type: 'deposit',
          category: 'Renda Mensal',
          amount: 6000,
          createdAt: new Date('2022-01-07 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Gasto Mensal',
          amount: 500,
          createdAt: new Date('2022-01-10 18:00:00'),
        },

      ],
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=> {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


