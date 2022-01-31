import { useNavigate } from 'react-router-dom';

function DetailsPage() {
  const navigate = useNavigate();
  const goToMainPage = () => navigate('/');

  return (
    <div style={styles.container}>
        <p>Details page</p>
        <button onClick={goToMainPage}>Go to main page</button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
  },
};

export default DetailsPage;
