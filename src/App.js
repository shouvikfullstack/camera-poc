import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import TakeImage from './pages/TakeImage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/take-image" component={TakeImage} />
      </Switch>
    </div>
  );
}

export default App;
