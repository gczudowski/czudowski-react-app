import Button from './components/button/Button';

function App() {
  return (
    <div style={styles.app}>
      <header>
        <p>
          This is my app
        </p>
        <p>
          <Button />
        </p>
      </header>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  app: {
    textAlign: 'center',
  },
};

export default App;
