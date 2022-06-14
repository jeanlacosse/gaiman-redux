import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Snacks from './snacks';
import SnackForm from './snackForm';

function App() {
  return (
    <>
      <h1>Its' redux day in Gaiman</h1>

      <Counter />
      <SnackForm />
      <Snacks />
    </>
  );
}

export default App;
