import Start from './Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Start />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
