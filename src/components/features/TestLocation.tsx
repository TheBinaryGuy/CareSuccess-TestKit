import { AppTheme } from 'App';
import * as Location from 'expo-location';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const TestLocation = () => {
    const [msg, setMsg] = useState<
        'Not Tested' | 'Waiting' | 'Ok' | 'Error' | 'Denied'
    >('Not Tested');

    const {
        colors: { error },
    } = useTheme() as AppTheme;

    return (
        <View style={styles.container}>
            <Button
                mode={msg === 'Ok' ? 'contained' : 'contained-tonal'}
                icon='crosshairs-gps'
                loading={msg === 'Waiting'}
                color={msg === 'Denied' ? error : undefined}
                onPress={async () => {
                    try {
                        setMsg('Waiting');
                        let { status } =
                            await Location.requestForegroundPermissionsAsync();
                        if (status !== 'granted') {
                            setMsg('Denied');
                            return;
                        }

                        await Location.getCurrentPositionAsync({});
                        setMsg('Ok');
                    } catch {
                        setMsg('Error');
                    }
                }}>
                Location | {msg}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
});

export default TestLocation;
