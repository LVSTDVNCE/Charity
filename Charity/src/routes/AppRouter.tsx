import { Layout } from '@layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutePaths, ROUTES } from './Routes';
import { Suspense } from 'react';
import { Loader } from '@ui';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RoutePaths.HOME} element={<Layout />}>
					{ROUTES.map(({ path, Component }) => (
						<Route
							key={path}
							path={path}
							element={
								<Suspense fallback={<Loader />}>
									<Component />
								</Suspense>
							}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
