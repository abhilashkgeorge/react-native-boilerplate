import { ViewStyle } from 'react-native';

export default {
	col: {
		flexDirection: 'column',
	},
	colReverse: {
		flexDirection: 'column-reverse',
	},
	wrap: {
		flexWrap: 'wrap',
	},
	row: {
		flexDirection: 'row',
	},
	rowReverse: {
		flexDirection: 'row-reverse',
	},
	itemsCenter: {
		alignItems: 'center',
	},
	itemsStart: {
		alignItems: 'flex-start',
	},
	itemsStretch: {
		alignItems: 'stretch',
	},
	itemsEnd: {
		alignItems: 'flex-end',
	},
	selfCenter: {
		alignSelf: 'center',
	},
	justifyCenter: {
		justifyContent: 'center',
	},
	justifyAround: {
		justifyContent: 'space-around',
	},
	justifyBetween: {
		justifyContent: 'space-between',
	},
	justifyEnd: {
		justifyContent: 'flex-end',
	},
	justifyStart: {
		justifyContent: 'flex-start',
	},
	contentCenter: {
		alignContent: 'center',
	},
	contentAround: {
		alignContent: 'space-around',
	},
	contentBetween: {
		alignContent: 'space-between',
	},
	contentEnd: {
		alignContent: 'flex-end',
	},
	contentStart: {
		alignContent: 'flex-start',
	},
	/* Sizes Layouts */
	flex_1: {
		flex: 1,
	},
	fullWidth: {
		width: '100%',
	},
	fullHeight: {
		height: '100%',
	},
	/* Positions */
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
	},
	top0: {
		top: 0,
	},
	bottom0: {
		bottom: 0,
	},
	left0: {
		left: 0,
	},
	right0: {
		right: 0,
	},
	top10: {
		top: 10,
	},
	top30: {
		top: 30,
	},
	bottom10: {
		bottom: 10,
	},
	bottom30: {
		bottom: 30,
	},
	left30: {
		left: 30,
	},
	right30: {
		right: 30,
	},
	z1: {
		zIndex: 1,
	},
	z10: {
		zIndex: 10,
	},
} as const satisfies Record<string, ViewStyle>;
