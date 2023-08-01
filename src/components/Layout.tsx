import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { st } from '@/lib';
import { ThemeToggle } from '@/ui';

interface Props {
	children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
	return (
		<div>
			<div className={S}>
				<div>
					<Link href='/'> Home</Link>
					<Link href='/slick'> slick</Link>
				</div>
				<ThemeToggle />
			</div>
			{children}
		</div>
	);
};

const S = st` 
		flex
		items-center
		justify-between
		bg-violet-500
		rounded-sm
		p-2 m-2
`();
