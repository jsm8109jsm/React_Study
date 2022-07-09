//App.js

import './App.css';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="hello" color="red" isSpecial/> {/*isSpecial={true}*/}
      <Hello name="bye" />
    </Wrapper>
  );
}

export default App;
