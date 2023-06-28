import ListUsers from './list-users';

import { getUsers } from '@/fetch-api';

export default async function InitialData() {
	const users = await getUsers();

	return <ListUsers users={users} />;
}
