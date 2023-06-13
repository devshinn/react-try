type TemplateValues<T> =
	| ((props: T) => Partial<T> | string | false)
	| Partial<T>
	| string;

export function st<T>(
	strings: TemplateStringsArray,
	...objs: TemplateValues<T>[]
) {
	const getStyle = (props?: T): string => {
		let textValue = strings.reduce(
			(value: string, current: string, index: number) => {
				return value + current;
			},
		);

		const ifText = objs.map(f => {
			if (f instanceof Function) {
				const f_value = f(props as T);
				return f_value ? f_value : null;
			} else return '';
		});
		return (combineText(textValue) + ' ' + ifText.join(' ')).trim();
	};

	return (props?: T) => getStyle(props);
}
function combineText(input: string) {
	const lines = input.split('\n'); // 문자열을 줄 단위로 분리하여 배열로 변환
	const result = lines
		.map(line => line.trim()) // 각 줄의 앞뒤 공백 제거
		.filter(line => line.length > 0) // 빈 줄 제거
		.join(' '); // 공백으로 구분하여 합치기

	return result;
}
