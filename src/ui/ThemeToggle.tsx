'`use client`;';

import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const onChanger = useCallback(() => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	}, [setTheme, theme]);

	return (
		<div>
			<button
				className='rounded-sm bg-zinc-900 px-2 py-[10px] dark:bg-zinc-100 '
				onClick={onChanger}
			>
				<span className='inline-block text-sm text-zinc-100 dark:hidden '>
					Switch to Dark
				</span>
				<span className='hidden text-sm text-zinc-800 dark:inline-block '>
					Switch to Light
				</span>
			</button>
		</div>
	);
}
