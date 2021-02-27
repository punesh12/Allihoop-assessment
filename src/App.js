import './App.css';
import { Route, Switch } from "react-router-dom";

import SignIn from './SignIn';
import SignUp from './SignUp';
import Posts from './Posts';

function App() {
  return (
    <div className="App">


      <Switch>
        
        <Route exact path="/" component={Posts} />
        {/* <Route path="/" component={SignIn} /> */}
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>

    </div>
  );
}

export default App;
