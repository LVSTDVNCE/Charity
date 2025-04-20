import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from '@routes';

const client = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={client}>
			<AppRouter />
		</QueryClientProvider>
	);
}
