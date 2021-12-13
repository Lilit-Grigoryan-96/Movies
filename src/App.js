import {BrowserRouter, BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.scss';
import Movies from "./pages/Movies/Movies"
import Home from "./pages/Home/Home"
import People from "./pages/People/People";
import Movie from "./pages/Movies/Movie";
import Person from "./pages/People/Person";
import SearchPage from "./pages/SearchPage/SearchPage"
import TvShows from "./pages/TV Shows/TvShows";
import TvShow from "./pages/TV Shows/TvShow";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/movies" component={Movies}/>
                    <Route exact path="/tv-shows" component={TvShows}/>
                    <Route exact path="/tv-show/:id" component={TvShow}/>
                    <Route exact path="/people" component={People}/>
                    <Route exact path="/people/:id" component={Person}/>
                    <Route exact path="/movie/:id" component={Movie}/>
                    <Route exact path="/search/:param" component={SearchPage}/>
                </Switch>
            </Router>
        </div>
      </BrowserRouter>
  );
}

export default App;
