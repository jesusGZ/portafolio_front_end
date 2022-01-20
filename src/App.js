import { Container, Grid } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { Footer } from './compontent/Footer/Footer';
import Header from './compontent/Header/Header';
import Profile from './compontent/Profile/Profile.js';
import { Portfolio } from './Pages/Portfolio/Portfolio';
import { Resume } from './Pages/Resume/Resume';
import { GlobalStyles } from './compontent/Themes/globalStyles';
import { useDarkMode } from './compontent/Themes/useDarkMode';
import { lightTheme, darkTheme } from './compontent/Themes/Themes';
import Toggle from './compontent/Themes/Toggler';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { connect } from 'react-redux';
import { fetchGetUser } from './reducers/userReducer';

function App() {
	const [theme, themeToggler, mountedComponent] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	if (!mountedComponent) return <div />;
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<Container maxWidth="xl" className="top_60">
					<Toggle theme={theme} toggleTheme={themeToggler} />
					<Grid container spacing={6}>
						<Grid item xs={12} sm={12} md={4} lg={3}>
							<Profile></Profile>
						</Grid>
						<Grid item xs>
							<Router>
								<Header />
								<div className="main_content containeer_shadow">
									<Switch>
										<Route path="/portfolio">
											<Portfolio />
										</Route>
										<Route path="/">
											<Resume />
										</Route>
									</Switch>
								</div>
							</Router>
							<Footer />
						</Grid>
					</Grid>
				</Container>
			</>
		</ThemeProvider>
	);
}

export default connect(
	//función que mapea propiedades del state con propiedades del componente
	(state) => ({ user: state.user.user }),
	//mapeo de funciones
	{ fetchGetUser }
)(App);
