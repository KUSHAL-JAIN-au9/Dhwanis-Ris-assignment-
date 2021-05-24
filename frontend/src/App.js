import {  Route, Switch }   from 'react-router-dom'
import './App.css';
import TablePage from './pages/TablePage';
import PieChartPage from './pages/PieChartPage'

function App() {
  return (
    <div className="App">

      <Switch>

        <Route exact path ='/' component ={ TablePage } />
        <Route exact path ='/page2' component ={ PieChartPage } />
      </Switch>

     
    </div>
  );
}

export default App;
