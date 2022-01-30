import { Provider } from 'react-redux';
import store from './store/store';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  app: {
    textAlign: 'center',
  },
};

export default App;
