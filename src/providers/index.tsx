'use client';

import { ThemeProvider } from 'next-themes';

import RootStyleRegistry from './rootStyleRegistry';

interface Props {
	children: React.ReactNode;
}
export default function Providers({ children }: Props) {
	return (
		<ThemeProvider defaultTheme='system' enableSystem={false}>
			<RootStyleRegistry>{children}</RootStyleRegistry>
		</ThemeProvider>
	);
}

export function Print() {
	console.log('hello world');
}
