import { User } from '@type/index';

type RequestCache =
	| 'default'
	| 'force-cache'
	| 'no-cache'
	| 'no-store'
	| 'only-if-cached'
	| 'reload';

export async function getUsers() {
	// console.log('request api  getUsers');
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		// cache: 'force-cache', //SSG => getStaticSideProps
		cache: 'no-store', //SSR => getServerSideProps
		// next: {
		// 	revalidate: 20, // ISR
		// }
	});
	const users = (await res.json()) as User[];
	return users;
}

export async function getUser(id: string) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const user = (await res.json()) as User;
	return user;
}

export async function getCrawlData() {
	const res = await fetch(
		'https://rmt2rmbupk.execute-api.ap-northeast-2.amazonaws.com/default/lambda--server-test',
		{ cache: 'no-store' },
	);
	const data = (await res.json()) as string[] | any;
	return data;
}

export const fetchData = async (host: string) => {
	const res = (await fetch(`/api/hello`)).text();
	return res;
};
