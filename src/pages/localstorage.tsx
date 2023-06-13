import { useLocalStorage } from '@/hooks/useLocalstorage';
import { st } from '@/lib';

function Page() {
	const [store, setStore] = useLocalStorage('isReact', 'fadsf');
	const onChangeStoreValue = () => {
		setStore((v: String) => (v === 'true' ? 'false' : 'true'));
	};
	return (
		<div className={wrapStyle}>
			<div>storeValue : {store}</div>
			<br />
			<button className={btnStyle} onClick={onChangeStoreValue}>
				changeValue
			</button>
		</div>
	);
}

export default Page;
const btnStyle = st`text-white bg-gradient-to-r from-blue-500 via-blue-600
 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
	`();

const wrapStyle =
	st`p-5 m-5 border-2 border-gray-300 dark:border-gray-500 rounded`();
