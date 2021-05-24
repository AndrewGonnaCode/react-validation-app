
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';



function App() {
	const user = useSelector((state) => state.reducer.user)
	return (
		<div className="container">
			<Navbar />
			<Switch>
				{!user && <Redirect exact from="/profile" to="/" />}
				<Route path="/profile" component={Profile} />
				<Route path="/login" component={Login} />
				<Route path="/" component={Home} exact />
			</Switch>
		</div>
	);
}

export default App;
