import { StoreApi, create } from 'zustand';
import { devtools } from 'zustand/middleware';

type User = {
	id: number | null;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
};

type State = {
	user: User;
	setUser: (user: User) => void;
	logout: () => void;
};

const initialState: User = {
	id: null,
	name: '',
	username: '',
	email: '',
	address: {
		street: '',
		suite: '',
		city: '',
		zipcode: '',
		geo: {
			lat: '',
			lng: '',
		},
	},
};

const store = (set: StoreApi<State>['setState']) => ({
	user: initialState,
	setUser: (user: User) => set(state => ({ ...state, user })),
	logout: () => {
		set(state => ({ ...state, user: initialState }));
	},
});

const useUserStore = create(devtools(store));
export default useUserStore;
