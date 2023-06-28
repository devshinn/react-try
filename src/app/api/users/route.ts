import { User } from '@type/index';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	console.log('server request api  getUsers');
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		cache: 'no-store', //SSR => getServerSideProps
	});
	const users = (await res.json()) as User[];

	return NextResponse.json(users);
}
