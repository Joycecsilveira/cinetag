import styles from './Favorites.module.css';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';
import { useContext } from 'react';

const theme = useContext(FavoritesContext);
function Favorites() {
	return (
		<>
			<Banner image="favoritos" />
			<Title>
				<h1>Seus vídeos favoritos!</h1>
			</Title>
			<section className={styles.container}>
				{Favorites.map((fav) => {
					return <Card {...fav} key={fav.id} />;
				})}
			</section>
		</>
	);
}

export default Favorites;
