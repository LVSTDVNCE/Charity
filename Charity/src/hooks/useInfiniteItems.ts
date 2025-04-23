import { useInfiniteQuery } from '@tanstack/react-query';
import { supabase } from 'src/supabase-client';
import { TCard } from 'types';

const PAGE_SIZE = 9;

export const useInfiniteItems = (searchQuery = '') => {
	return useInfiniteQuery({
		queryKey: ['items', searchQuery],
		queryFn: async ({ pageParam = 0 }): Promise<TCard[]> => {
			const from = pageParam * PAGE_SIZE;
			const to = from + PAGE_SIZE - 1;

			let query = supabase
				.from('Events')
				.select('*')
				.order('date', { ascending: true })
				.order('time', { ascending: true })
				.range(from, to);

			if (searchQuery) {
				query = query.ilike('title', `%${searchQuery}%`);
			}

			const { data, error } = await query;
			if (error) throw error;
			return data as TCard[];
		},
		getNextPageParam: (lastPage, allPages) => {
			if (lastPage.length < PAGE_SIZE) return undefined;
			return allPages.length;
		},
		initialPageParam: 0,
	});
};
