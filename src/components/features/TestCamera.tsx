import { AppTheme } from 'App';
import { Camera } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const TestCamera = () => {
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
                icon='camera'
                loading={msg === 'Waiting'}
                color={msg === 'Denied' ? error : undefined}
                onPress={async () => {
                    try {
                        setMsg('Waiting');
                        let { granted } =
                            await Camera.requestCameraPermissionsAsync();
                        setMsg(granted ? 'Ok' : 'Denied');
                    } catch {
                        setMsg('Error');
                    }
                }}>
                Camera | {msg}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
});

export default TestCamera;
