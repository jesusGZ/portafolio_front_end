import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Portfolio } from '../Pages/Portfolio/Portfolio';
import { Resume } from '../Pages/Resume/Resume';

const Rutas = () => {
	return (
		<div>
			<Routes>
				<Route path="/">
					{/* <Route index element={<Resume />} /> */}
					<Route path="/" element={<Resume />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Route>
			</Routes>
		</div>
	);
};

export default Rutas;
