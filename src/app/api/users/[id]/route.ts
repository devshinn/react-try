export async function GET(
	req: Request,
	{ params }: { params: { id: string } },
) {
	var count = 0;

	const res = await fetch(
		'https://jsonplaceholder.typicode.com/users/' + params.id,
	);
	const user = await res.json();
	count += 1;
	return new Response(JSON.stringify(user));
}
