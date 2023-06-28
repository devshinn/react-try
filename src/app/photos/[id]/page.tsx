import { Photo } from '@/components/photo';

type Props = {
	params: { id: string };
};

function page({ params: { id } }: Props) {
	return (
		<div>
			<Photo id={id} />
		</div>
	);
}

export default page;
