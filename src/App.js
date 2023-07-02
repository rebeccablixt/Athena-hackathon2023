import { Routes, Route } from 'react-router-dom';

import './App.css';

import {
	BookingPage,
	ConfirmationPage,
	DonatorPage,
	HomePage,
	ScanPage,
} from './pages/index';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/booking' element={<BookingPage />} />
			<Route path='/confirmation' element={<ConfirmationPage />} />
			<Route path='/donator' element={<DonatorPage />} />
			<Route path='/scan' element={<ScanPage />} />
			{/* <Route path='*' element={<PageNotFound />} /> */}
		</Routes>
	);
}

export default App;
