import { extendTheme } from 'native-base';

export const customTheme = extendTheme({

	colors: {
		// App Colors
		primary: '#1469e9',
		primaryOpacity: 'rgba(0, 8, 20, 0.9)',
		primaryOpacityLight: 'rgba(0, 8, 20, 0.3)',
		secondary: 'rgba(0, 234, 128, 1)',
		secondaryOpacity: 'rgba(0, 234, 128, 0.5)',
		secondaryOpacityLight: 'rgba(0, 234, 128, 0.3)',
		whiteHex: '#f7f6f3',
		highlightGray: '#6C757D',
		online: '#5CB85C',
		offline: '#D9534F',
		notificationRed: 'red.600',
		notificationRedOpacity: 'red.400',
		transparent: 'transparent',
		white75: 'rgba(255, 255, 255, 0.75)',
		white50: 'rgba(255, 255, 255, 0.5)',
		white25: 'rgba(255, 255, 255, 0.25)',
		white5:  'rgba(255, 255, 255, 0.05)',
		neutralGray: '#999999',
		neutralGrayTransparent: '#D5D5D5',
		// Add more colors here
	},
	components: {
		Input: {
			baseStyle: {
				borderColor: 'rgba(0, 234, 128, 0.5)',
				_focus: {
					borderColor: 'rgba(0, 234, 128, 1)',
				},
			}
		},
		TextArea: {
			baseStyle: {
				borderColor: 'rgba(0, 234, 128, 0.5)',
				_focus: {
					borderColor: 'rgba(0, 234, 128, 1)',
				},
			}
		},
	},

});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType { }
}