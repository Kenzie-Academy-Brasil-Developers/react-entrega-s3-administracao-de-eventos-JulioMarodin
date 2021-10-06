import { Route, Switch } from 'react-router';
import DrinkList from '../components/DrinksList';
import Wedding from '../components/Wedding';
import Graduation from '../components/Graduation';
import Confraternization from '../components/Confraternization';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <DrinkList />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
      <Route path="/confraternization">
        <Confraternization />
      </Route>
    </Switch>
  );
};

export default Routes;
