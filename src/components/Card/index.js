import { useFavoriteContext } from '../../context/favorites';
import styles from './Card.module.css';
import iconFavorite from './favorited.png';

function Card({ id, title, cover }) {
	const { favorite, addFavorite } = useFavoriteContext();
	return (
		<div className={styles.container}>
			<img src={cover} alt={title} className={styles.cover} />
			<h2>{title}</h2>
			<img
				src={iconFavorite}
				alt="Favoritar filme"
				className={styles.favorited}
				onClick={() => addFavorite({ id, title, cover })}
			/>
		</div>
	);
}

export default Card;
