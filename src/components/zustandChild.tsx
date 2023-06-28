'use client';

import useUserStore from '@/store/userStore';

function ZustandChild() {
	const { user } = useUserStore();
	// useUserStore.setState(state => ({ ...state }));
	return <div>{user.name}</div>;
}

export default ZustandChild;
