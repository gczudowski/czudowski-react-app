import { ReactElement } from 'react';

function Button(): ReactElement {
  return (
    <button style={styles.button}>test button</button>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    backgroundColor: 'red',
  },
};

export default Button;
