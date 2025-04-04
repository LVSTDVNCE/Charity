import { Layout } from '@layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutePaths, ROUTES } from './Routes';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RoutePaths.HOME} element={<Layout />}>
					{ROUTES.map(({ path, Component }) => (
						<Route key={path} path={path} element={<Component />} />
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
