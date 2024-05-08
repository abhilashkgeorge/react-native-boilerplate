import { useEffect, useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	Alert,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { ThemeButton } from '@/components/atoms';
import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { ApplicationScreenProps } from '@/types/navigation'
import SendImage from '@/theme/assets/images/send.png';

function Welcome({ navigation }: ApplicationScreenProps) {
	const {
		layout,
		gutters,
		fonts,
		components,
		backgrounds,
	} = useTheme();

	const [currentId, setCurrentId] = useState(-1);

	const { isSuccess, data, isFetching } = useQuery({
		queryKey: ['home', currentId],
		queryFn: () => {
			return Promise.resolve(true);
		},
		enabled: currentId >= 0,
	});

	useEffect(() => {
		console.log(isSuccess)
		if (isSuccess) {
			Alert.alert('My Name is ');
		}
	}, [isSuccess, data]);

	const handleContinue = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Startup' }],
		});
	  };

	return (
		<SafeScreen>
			<ScrollView>
				<View
					style={[
						layout.justifyCenter,
						layout.itemsCenter,
						gutters.marginTop_40,
					]}
				>
					<View
						style={[layout.relative, backgrounds.gray100, components.circle250]}
					/>

					<View style={[layout.absolute, gutters.paddingTop_80]}>
						<Brand height={300} width={300} />
					</View>
				</View>

				<View style={[gutters.paddingHorizontal_32, gutters.marginTop_40]}>
					<View style={[gutters.marginTop_40]}>
						<Text style={[fonts.size_40, fonts.gray800, fonts.bold]}>
						Welcome To
						</Text>
						<Text
							style={[
								fonts.gray400,
								fonts.bold,
								fonts.size_24,
								gutters.marginBottom_32,
							]}
						>
							The Dabba Network
						</Text>
						<Text
							style={[fonts.size_16, fonts.gray200, gutters.marginBottom_40]}
						>
							Dabba enables internet connectivity where it's needed the most, through hardware and the Dabba network.
						</Text>
					</View>

					<View
						style={[
							layout.row,
							layout.justifyBetween,
							layout.fullWidth,
							gutters.marginTop_16,
						]}
					>
					</View>
				</View>
			</ScrollView>
			<View
				style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter, layout.bottom30, layout.selfCenter, {width: "50%"} ]}>
				<ThemeButton 
					isFetching={isFetching}
					onPress={handleContinue}
					imageSource={SendImage}
					title='Continue'
				/>
			</View>
		</SafeScreen>
	);
}

export default Welcome;
