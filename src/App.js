import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useState} from 'react';
import AccessPage from './components /AccessPage/AccessPage';
import MainPage from './components /MainPage/MainPage';
import './App.css';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
      <Route {...rest} render={props => (
        <Layout {...props}>
          <Component {...props} {...rest} />
        </Layout>
      )} />
    ) 
  }

  const MainLayout = (props) => {
    return (
      <div className="app-wrapper">
        <div className="app-wrapper-content" >
          {props.children}
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path="/" layout={MainLayout} component={AccessPage} currentUser={user} setUser={setUser} />
        <AppRoute path="/hello" layout={MainLayout} component={MainPage} setUser={setUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
