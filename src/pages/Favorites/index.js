import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';
import styles from './Favorites.module.css';
import { useFavoriteContext } from '../../context/favorites';

function Favorites() {
	const { favorite } = useFavoriteContext();
	return (
		<>
			<Banner image="favoritos" />
			<Title>
				<h1>Seus vídeos favoritos!</h1>
			</Title>
			<section className={styles.container}>
				{favorite?.map((fav) => {
					return <Card {...fav} key={fav.id} />;
				})}
			</section>
		</>
	);
}

export default Favorites;
