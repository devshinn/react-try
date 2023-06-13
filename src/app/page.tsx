'use client';

import { useState } from 'react';

import { st } from '@/lib';
import { ThemeToggle } from '@/ui';

export default function Home() {
	const [v, setv] = useState(true);

	return (
		<main className='flex min-h-full flex-col items-center justify-between p-24'>
			<div>
				<ThemeToggle />

				<button
					className={style({ bg: v })}
					onClick={() => setv(v => (v ? false : true))}
				>
					Main
				</button>
			</div>
		</main>
	);
}

const lets = `hdif ff-g bg-kko`;
const style = st<{ bg: boolean }>`bg-green ${p => p.bg && 'bg-red-300'}
		m-3 border-2 border-yellow-700 p-1 text-center text-green-700
		px-6 py-3 rounded-lg
`;
