'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const fetchData = async () => {
	const res = await fetch(`/api/users`);
	return res.json();
};

export default function ListUsers() {
	const [count, setCount] = React.useState(0);

	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ['hydrate-users'],
		queryFn: fetchData,
		staleTime: 3000,
	});

	return (
		<main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
			<div style={{ marginBottom: '4rem', textAlign: 'center' }}>
				<h4 style={{ marginBottom: 16 }}>{count}</h4>
				<button onClick={() => setCount(prev => prev + 1)}>
					increment
				</button>
				<button
					onClick={() => setCount(prev => prev - 1)}
					style={{ marginInline: 16 }}
				>
					decrement
				</button>
				<button onClick={() => setCount(0)}>reset</button>
			</div>

			{error ? (
				<p>Oh no, there was an error</p>
			) : isLoading || isFetching ? (
				<p>Loading...</p>
			) : data ? (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr 1fr 1fr',
						gap: 20,
					}}
				>
					{data.map((user: any) => (
						<div
							key={user.id}
							style={{
								border: '1px solid #ccc',
								textAlign: 'center',
							}}
						>
							<Link href={`/photos/${user.id}`}>
								<Image
									src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
									alt={user.name}
									// style={{ height: 180, width: 180 }}
									// style={{ height: 180, width: 180 }}
									width={180}
									height={180}
									placeholder='blur' // 추가
									blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAAE0lEQVR42mN0XfehngENMA6oIABPRxC2b0sFwAAAAABJRU5ErkJggg=='
								/>

								<h3>{user.name}</h3>
							</Link>
						</div>
					))}
				</div>
			) : null}
		</main>
	);
}
