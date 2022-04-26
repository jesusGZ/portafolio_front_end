import React from 'react';

import { Container, Grid } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { lightTheme, darkTheme } from './styles/Themes/Themes';
import { GlobalStyles } from './styles/Themes/globalStyles';
import { useDarkMode } from './styles/Themes/useDarkMode';
import { Footer } from './components/Footer/Footer';
import Profile from './Pages/Profile/Profile';
import Header from './components/Header/Header';
import Toggle from './styles/Themes/Toggler';
import Rutas from './routes';
import './styles/index.css';

function App() {
	const [theme, themeToggler, mountedComponent] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!mountedComponent) return <div />;

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Container maxWidth="xl" className="top_60">
				<Toggle theme={theme} toggleTheme={themeToggler} />
				<Grid container justifyContent="flex-start" spacing={6}>
					<Grid item xs={12} sm={12} md={4} lg={3}>
						<Profile></Profile>
					</Grid>
					<Grid item xs>
						<Router>
							<Header />
							<div className="main_content containeer_shadow">
								<Rutas />
							</div>
						</Router>
						<Footer />
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default App;
