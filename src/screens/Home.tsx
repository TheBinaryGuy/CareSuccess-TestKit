import { useNetInfo } from '@react-native-community/netinfo';
import { AppTheme } from 'App';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Appbar, Divider, List, Text, useTheme } from 'react-native-paper';
import { Container } from 'src/components/Container';
import AppInfo from 'src/components/features/AppInfo';
import DeviceInfo from 'src/components/features/DeviceInfo';
import HasFeatures from 'src/components/features/HasFeatures';
import TestBiometric from 'src/components/features/TestBiometric';
import TestCamera from 'src/components/features/TestCamera';
import TestLocation from 'src/components/features/TestLocation';
import TestReadWrite from 'src/components/features/TestReadWrite';

export const Home = () => {
    const state = useNetInfo();
    const {
        colors: { primary },
    } = useTheme() as AppTheme;

    return (
        <Container>
            <StatusBar backgroundColor={primary} style='light' />

            <Appbar
                mode='small'
                style={{
                    paddingLeft: 20,
                    backgroundColor: primary,
                }}>
                <Text
                    variant='headlineSmall'
                    style={{
                        color: '#ffffff',
                    }}>
                    CareSuccess TestKit
                </Text>
            </Appbar>

            <View style={styles.container}>
                <Text variant='titleMedium'>Required</Text>
                <View>
                    <TestLocation />
                    <TestReadWrite />
                    <TestCamera />
                </View>
            </View>

            <Divider />

            <View style={styles.container}>
                <Text variant='titleMedium'>Optional</Text>
                <HasFeatures />
                <TestBiometric />
            </View>

            <Divider />

            <View style={styles.container}>
                <Text variant='titleMedium'>Internet Connection Info</Text>
                <View>
                    <List.Section>
                        <List.Item
                            title={state.type.toLocaleUpperCase()}
                            description='Internet Type'
                        />
                        <List.Item
                            title={state.isConnected ? 'Yes' : 'No'}
                            description='Connected?'
                        />
                        <List.Item
                            title={state.isInternetReachable ? 'Yes' : 'No'}
                            description='Is Internet Reachable?'
                        />
                    </List.Section>
                </View>
            </View>

            <Divider />

            <View style={styles.container}>
                <Text variant='titleMedium'>Device Info</Text>
                <DeviceInfo />
            </View>

            <Divider />

            <View style={styles.container}>
                <Text variant='titleMedium'>Application Info</Text>
                <AppInfo />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
