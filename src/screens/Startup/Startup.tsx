import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { useTheme } from '@/theme';
import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/template';

import type { ApplicationScreenProps } from '@/types/navigation';

function Startup({ navigation }: ApplicationScreenProps) {
	const { layout, gutters, fonts, backgrounds } = useTheme();

	const { isSuccess, isFetching, isError } = useQuery({
		queryKey: ['startup'],
		queryFn: () => {
			return Promise.resolve(true);
		},
	});
// Fix: added a timeout to mimic the behavior of the delay in the api call
	useEffect(() => {
		const timeout = setTimeout(() => {
			navigation.reset({
				index: 0,
				routes: [{ name: 'Home' }],
			}); 
			console.log("Success!");
		}, 500);
		return () => clearTimeout(timeout);
	}, [isSuccess]);

	return (
		<SafeScreen>
			<View
				style={[
					layout.flex_1,
					layout.col,
					layout.itemsCenter,
					layout.justifyCenter,
					backgrounds.gray100
				]}
			>
				<Brand />
				{isFetching && (
					<ActivityIndicator size="large" style={[gutters.marginHorizontal_80]} />
				)}
				{isError && (
					<Text style={[fonts.size_16, fonts.red500]}>
						Something went wrong.
					</Text>
				)}
				<Text style={[fonts.size_16, layout.bottom0, gutters.marginBottom_16, layout.absolute, fonts.bold]}> DABBA INTERNET </Text>
			</View>
		</SafeScreen>
	);
}

export default Startup;
