import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from './../../store/app/app.action';
import Button from './../../components/button/Button';

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: any) => state.app.isDarkMode);

  const onClickButton = () => dispatch(setDarkMode(!isDarkMode));;

  return (
    <div style={styles.container}>
        <p>
            This is my app
        </p>
        <p>
            is Dark Mode: {String(isDarkMode)}
        </p>
        <p>
            <button onClick={onClickButton}>change dark mode</button>
        </p>
        <p>
            <Button />
        </p>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
  },
};

export default App;
