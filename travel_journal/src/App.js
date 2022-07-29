import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import data from './data';

function App() {
  
  const contents = data.map((item) => {
    return <Main {...item} />;
  });
  return (
    <div>
      <Navbar />
      <section className='contents'>{contents}</section>
    </div>
  );
}

export default App;
