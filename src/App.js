import './App.css';
import Header from './components/Header';
import MainBlock from './components/contentBlock/mainBlock';


function App({info}) {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Real-header">
        <Header />
        <div>{info}</div>
      </div>
      </header>
      <body>
        <MainBlock n={7}/>
      </body>
    </div>
  );
}

export default App;
