import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CheckoutContainer from './components/Checkout/Checkout';
import HeaderContainer from './components/Header/Header';
import Home from './components/Home/Home';
import LoginContainer from './components/Login/Login';
import PaymentContainer from './components/Payment/Payment';
import { auth } from './firebase';
import { setUser } from './redux/appReducer';

function App({stateUser}) {

	
	auth.onAuthStateChanged(authUser => {
		console.log(authUser)
		if(authUser) {
			stateUser(authUser)
		} else {
			stateUser(null)
		}
	})
	

	return (
			<div className="App">
				<Switch>
					<Route path="/login">
						<LoginContainer />
					</Route>
					<Route path="/checkout">
						<HeaderContainer />
						<CheckoutContainer />
					</Route>
					<Route path="/payment">
						<PaymentContainer />
					</Route>
					<Route path="/">
						<HeaderContainer />
						<Home />
					</Route>
				</Switch>
			</div>
	);
}

let mapDispatchToProps = dispatch => {
	return {
		stateUser: user => {
			dispatch(setUser(user))
		}
	}
}

let AppContainer = connect(null, mapDispatchToProps)(App)

export default AppContainer;
