import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const data = await fetch(
		'https://rmt2rmbupk.execute-api.ap-northeast-2.amazonaws.com/default/lambda--server-test',
		// { cache: 'no-store' }
	);
	// const data = (await res.json()) as string[] | any;
	return NextResponse.json({
		text: 'Hello, Next.js!',
		crawl: await data.json(),
	});
}
