import { Route, Switch } from 'react-router-dom';
import './App.css';
import CheckoutContainer from './components/Checkout/Checkout';
import HeaderContainer from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
	return (
		<Route>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<HeaderContainer />
						<CheckoutContainer />
					</Route>
					<Route path="/">
						<HeaderContainer />
						<Home />
					</Route>
				</Switch>
			</div>
		</Route>

	);
}

export default App;
