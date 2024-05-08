import { View, Text, TouchableOpacity, ActivityIndicator, ImageSourcePropType } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'
import { isImageSourcePropType } from '@/types/guards/image';
import { ImageVariant } from '@/components/atoms'
interface ThemeButtonProps {
    isFetching: boolean;
    onPress: () => void;
    imageSource?: ImageSourcePropType;
    title: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ isFetching, onPress, imageSource, title }) => {
    if (
        imageSource && !isImageSourcePropType(imageSource)
    ) {
        throw new Error('Image source is not valid');
    }

    const { components, layout, fonts, colors, gutters } = useTheme()

    return (
        <TouchableOpacity
            style={[components.buttonCircle, layout.fullWidth, gutters.marginTop_10]}
            onPress={onPress}
            disabled={isFetching}
        >
            {isFetching ? (
                <ActivityIndicator />
            ) : (
                <View style={[layout.row, layout.itemsCenter]}>
                    <Text style={[fonts.gray800, fonts.alignCenter, fonts.bold, gutters.padding_24]}>{title}</Text>
                    {imageSource && (
                        <ImageVariant
                            source={imageSource}
                            style={{ tintColor: colors.purple500 }}
                        />
                    )}
                </View>
            )}
        </TouchableOpacity>
    )
}

export default ThemeButton;
