module.exports = {
	plugins: [
		'prettier-plugin-tailwindcss',
		'@trivago/prettier-plugin-sort-imports',
	],
	printWidth: 80, //  줄 바꿈 할 폭 길이
	tabWidth: 4, // 탭 너비
	useTabs: true, // 탭 사용 여부
	semi: true, // 세미콜론 사용 여부
	endOfLine: 'auto',
	singleQuote: true, // single 쿼테이션 사용 여부
	jsxSingleQuote: true,
	quoteProps: 'as-needed', // 객체 속성에 쿼테이션 적용 방식

	trailingComma: 'all', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
	bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
	arrowParens: 'avoid', // 화살표 함수 괄호 사용 방식
	proseWrap: 'preserve',
	endOfLine: 'auto', // EoF 방식, OS별로 처리 방식이 다름
	htmlWhitespaceSensitivity: 'css', // HTML 공백 감도 설정
	embeddedLanguageFormatting: 'off',

	importOrderSeparation: true,
	importOrderSortSpecifiers: true,

	importOrder: ['^[./]', '^@/(.*)$'],
};
