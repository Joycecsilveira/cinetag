import Start from './Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './Favorites';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import FavoritesProvider from '../context/favorites';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<FavoritesProvider>
					<Routes>
						<Route path="/" element={<Start />}></Route>
						<Route path="/favoritos" element={<Favorites />}></Route>
					</Routes>
				</FavoritesProvider>
			</Container>
			<Footer />
		</BrowserRouter>
	);
}

export default AppRoutes;
