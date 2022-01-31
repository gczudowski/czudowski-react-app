import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setDarkMode } from '@src/store/app/app.action';
import Button from '@src/components/button/Button';


function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDarkMode = useSelector((state: any) => state.app.isDarkMode);

  const onClickButton = () => dispatch(setDarkMode(!isDarkMode));;
  const goToDetailsPage = () => navigate('/details');

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
            <button onClick={goToDetailsPage}>go to details page</button>
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

export default MainPage;
