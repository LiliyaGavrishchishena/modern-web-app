import React from 'react';
import { hydrate } from 'react-dom'; //в React 16 теперь есть два разных метода для рендеринга на клиентской стороне. Метод render() для ситуаций, когда рендеринг выполняются полностью на клиенте, и метод hydrate() для случаев, когда рендеринг на клиенте основан на результатах серверного рендеринга. Благодаря обратной совместимости новой версии React, render() будет работать и в том случае, если ему передать то, что пришло с сервера.
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
