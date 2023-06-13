import Link from 'next/link';
import { styled } from 'styled-components';

import { ThemeToggle } from '@/ui';

function index() {
	return (
		<div>
			<Link href={'/'}>HOME</Link>
			<br />
			<ThemeToggle />
			<Button>styled-components</Button>
			<button className='bg-blue-600 text-fuchsia-50'>
				ssr-tailwindcss
			</button>
		</div>
	);
}

export default index;

const Button = styled.button`
	background:red;
	color:white;
`;
