import Start from './Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './Favorites';
import Player from './Player';
import NotFound from './NotFound';
import PageBase from './PageBase';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageBase />}>
					<Route index element={<Start />}></Route>
					<Route path="favoritos" element={<Favorites />}></Route>
					<Route path=":id" element={<Player />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
