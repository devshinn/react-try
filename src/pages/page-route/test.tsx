import styled from 'styled-components';

const st = (Component: any) => {
	console.log('styel:', Component);
	return styled(Component);
};

const Div = styled.div`
	background:green
`;

const App = () => {
	return (
		<div>
			<Div>안녕하세요</Div>
		</div>
	);
};

export default App;
