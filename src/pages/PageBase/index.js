import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import FavoritesProvider from '../../context/favorites';
import { Outlet } from 'react-router-dom';

function PageBase() {
	return (
		<main>
			<Header />
			<FavoritesProvider>
				<Container>
					<Outlet />
				</Container>
			</FavoritesProvider>
			<Footer />
		</main>
	);
}

export default PageBase;
