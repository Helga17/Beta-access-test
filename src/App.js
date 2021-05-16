import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AccessPage from './components/AccessPage/AccessPage';

function App() {

  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    if (false) {
      return <Redirect to="/"/>
    }
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
        <div className="app-wrapper-content">
          
          {props.children}
        
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path="/" layout={MainLayout} component={AccessPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
