'use client';

import { ThemeProvider } from 'next-themes';

import QueryProviders from './react-query';
import RootStyleRegistry from './rootStyleRegistry';

interface Props {
	children: React.ReactNode;
}
export default function ({ children }: Props) {
	return (
		<QueryProviders>
			<ThemeProvider defaultTheme='system' enableSystem={false}>
				<RootStyleRegistry>{children}</RootStyleRegistry>
			</ThemeProvider>
		</QueryProviders>
	);
}
