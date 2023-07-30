import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import store from './components/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
