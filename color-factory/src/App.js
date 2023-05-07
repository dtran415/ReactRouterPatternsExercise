import NewColorForm from './NewColorForm';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {useState} from "react";
import ColorsPage from './ColorsPage';
import Color from './Color';

function App() {
  const [colors, setColors] = useState([]);

  const addColor = color => {
    setColors(colors => [...colors, color]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorsPage colors={colors}/>
          </Route>
          <Route exact path="/colors/new">
            <NewColorForm addColor={addColor}/>
          </Route>
          <Route exact path="/colors/:color">
            <Color colors={colors}/>
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
