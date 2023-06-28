import ZustandChild from '@/components/zustandChild';
import ZustandTest from '@/components/zustandTest';
import useUserStore from '@/store/userStore';

export const fetchUser = async (id: number) => {
	const res = await fetch('http://localhost:3000/api/users/' + id);
	return await res.json();
};
async function page() {
	const data = await fetchUser(1);
	useUserStore.setState({ user: data });
	return (
		<div className='flex flex-col items-center'>
			<ZustandTest />
			<br />
			<ZustandChild />
		</div>
	);
}

export default page;
