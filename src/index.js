import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {Operation as DataOperation} from './store/reducers/data/operations';
import {Operation as UserOperation} from './store/reducers/user/operations';
import App from './components/app/app.jsx';

store.dispatch(DataOperation.fetchAppData());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.querySelector(`#root`)
);
