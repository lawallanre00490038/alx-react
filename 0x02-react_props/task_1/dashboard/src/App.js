import './App.css';
import Login from './Login/Login';
import Header from './Header/Header';

function App() {
  return (
    <>
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Login />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  )
}

export default App;
