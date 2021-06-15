import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header'
import Loading from './components/loading/loading';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './components/homepage/home';
import MoviePage from './components/moviepage/movie';
import MovieDetail from './components/moviepage/moviedetail/moviedetail';
import PrivateRoute from './routes/private/private_user';
import UserPage from './components/userpage/user';
import MovieTime from './components/movietime/movietime';
import Gift from './components/gift/gift';
import AdminPage from './components/admin/admin';
import PrivateRouteAdmin from './routes/private/private_admin';

function App() {
  return (
    <div className="App">
      <Loading></Loading>
        <Router>
          <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/movie">
                    <MoviePage></MoviePage>
                </Route>
                <Route exact path="/movie/:slug">
                    <MovieDetail></MovieDetail>
                </Route>
                <Route exact path="/movietime/:slug">
                    <MovieTime></MovieTime>
                </Route>
                <PrivateRoute exact path="/user" component={UserPage}>
                </PrivateRoute>
                <Route exact path="/gift">
                    <Gift></Gift>
                </Route>
                <PrivateRouteAdmin exact path="/admin" component={AdminPage}>
                </PrivateRouteAdmin>
            </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
