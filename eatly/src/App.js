
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Franchise from './components/Franchise'


function App() {
  return (
   <>
			<Router>
				<div className="App">
          <Navbar />
					<Routes>
						<Route
							exact
							path="/"
							element={<Home />}
						></Route>
						<Route
							exact
							path="/about"
							element={<About />}
						></Route>
						<Route
							exact
							path="/menu"
							element={<Menu />}
						></Route>
						<Route
							exact
							path="/franchise"
							element={<Franchise />}
						></Route>
					</Routes>
          <Footer/>
				</div>
			</Router>


   </>
  );
}

export default App;