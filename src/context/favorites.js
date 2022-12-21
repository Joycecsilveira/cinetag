import { createContext, useContext, useState } from 'react';

export const FavoriteContext = createContext();
FavoriteContext.displayName = 'Favorites';

export default function FavoritesProvider({ children }) {
	const [favorites, setFavorites] = useState([]);

	return (
		<FavoriteContext.Provider value={{ favorites, setFavorites }}>
			{children}
		</FavoriteContext.Provider>
	);
}

export function useFavoriteContext() {
	const { favorite, setFavorite } = useContext(FavoriteContext);

	function addFavorite(newFavorite) {
		const favoriteRepeated = favorite?.some(
			(item) => item.id === newFavorite.id
		);

		let newList = [favorite];

		if (!favoriteRepeated) {
			newList.push(newFavorite);
			return setFavorite(newList);
		}
		newList.splace(newList.indexOf(newFavorite), 1);
		return setFavorite(newList);
	}
	return {
		favorite,
		addFavorite,
	};
}
