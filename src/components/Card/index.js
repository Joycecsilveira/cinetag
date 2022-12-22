import { useFavoriteContext } from '../../context/favorites';
import styles from './Card.module.css';
import iconFavorite from './favorited.png';
import iconDisfavor from './disfavor.png';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
	const { favorite, addFavorite } = useFavoriteContext();
	const isFavorite = favorite.some((fav) => fav.id === id);
	const icon = !isFavorite ? iconFavorite : iconDisfavor;
	return (
		<div className={styles.container}>
			<Link className={styles.link} to={`/${id}`}>
				<img src={cover} alt={title} className={styles.cover} />
				<h2>{title}</h2>
			</Link>
			<img
				src={icon}
				alt="Favoritar filme"
				className={styles.favorited}
				onClick={() => addFavorite({ id, title, cover })}
			/>
		</div>
	);
}

export default Card;
