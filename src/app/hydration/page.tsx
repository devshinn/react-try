import { dehydrate } from '@tanstack/react-query';
import { headers } from 'next/dist/client/components/headers';

import ListUsers from './list-users';

import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';

const fetchData = async () => {
	console.log('server request');
	const res = await fetch(`http://localhost:3000/api/users`);
	return res.json();
};

const queryClient = getQueryClient();
export default async function Hydation() {
	const host = headers().get('host');
	await queryClient.prefetchQuery(['hydrate-users'], fetchData);
	const dehydratedState = dehydrate(queryClient);
	return (
		<Hydrate state={dehydratedState}>
			<ListUsers />
		</Hydrate>
	);
}
