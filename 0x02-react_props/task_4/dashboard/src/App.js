import './App.css';
import Notifications from './Notifications';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
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
  );
}

export default App;
