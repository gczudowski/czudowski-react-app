import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import store from './store/store';
import MainPage from './pages/mainPage/MainPage';
import DetailsPage from './pages/detailsPage/DetailsPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  app: {
    textAlign: 'center',
  },
};

export default App;
