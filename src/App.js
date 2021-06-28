import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Box from "@material-ui/core/Box";
import MovieInfo from "./Components/MovieInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movieInfo/:movieId" component={MovieInfo} />
        <Box className="App">
          <Header />
          <MainContent />
          <Footer />
        </Box>
      </Switch>
    </Router>
  );
}

export default App;
