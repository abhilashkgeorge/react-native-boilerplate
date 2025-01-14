import { View, DimensionValue, Text } from 'react-native';

import LogoLight from '@/theme/assets/images/DabbaPro_light.png';
import LogoDark from '@/theme/assets/images/DabbaPro.png';

import { ImageVariant } from '@/components/atoms';
import { useTheme } from '@/theme';
import { isImageSourcePropType } from '@/types/guards/image';

type Props = {
	height?: DimensionValue;
	width?: DimensionValue;
	mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height, width, mode }: Props) {
	const { layout } = useTheme();

	if (!isImageSourcePropType(LogoLight) || !isImageSourcePropType(LogoDark)) {
		throw new Error('Image source is not valid');
	}

	return (
		<View style={{ height, width }}>
			<ImageVariant
				testID="brand-img"
				style={[layout.fullHeight, layout.fullWidth]}
				source={LogoLight}
				sourceDark={LogoDark}
				resizeMode={mode}
			/>
		</View>
	);
}

Brand.defaultProps = {
	height: 200,
	width: 200,
	mode: 'contain',
};

export default Brand;
