import useUserStore from '@/store/userStore';

type Props = {};

function ZustandTest({}: Props) {
	const user = useUserStore.getState().user;
	// const { data, error } = useSWR('/api/users/1', fetchUser, {
	// 	revalidateOnFocus: false,
	// 	refreshInterval: 0, //자동 리프레쉬
	// 	onSuccess: data => setUser(data),
	// 	fallbackData: { name: '김신혁' },
	// });
	// useEffect(() => {
	// 	fetcher();
	// }, []);
	return (
		<div>
			zustandTest
			<div>
				{user?.name},{user.name}
			</div>
		</div>
	);
}

export default ZustandTest;
