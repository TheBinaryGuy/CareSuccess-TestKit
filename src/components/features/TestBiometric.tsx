import { AppTheme } from 'App';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const TestBiometric = () => {
    const [isBioAvailable, setIsBioAvailable] = useState<boolean>(false);

    const [msg, setMsg] = useState<
        'Not Tested' | 'Waiting' | 'Ok' | 'Error' | 'Denied'
    >('Not Tested');

    useEffect(() => {
        LocalAuthentication.hasHardwareAsync().then(hasHardware => {
            setIsBioAvailable(hasHardware);
            setMsg(hasHardware ? 'Not Tested' : 'Denied');
        });
    }, []);

    const {
        colors: { error },
    } = useTheme() as AppTheme;

    return (
        <View style={styles.container}>
            <Button
                disabled={!isBioAvailable}
                mode={msg === 'Ok' ? 'contained' : 'contained-tonal'}
                icon='fingerprint'
                loading={msg === 'Waiting'}
                color={msg === 'Denied' ? error : undefined}
                onPress={async () => {
                    try {
                        setMsg('Waiting');
                        let { success } =
                            await LocalAuthentication.authenticateAsync();

                        if (!success) {
                            setMsg('Error');
                            return;
                        }

                        setMsg('Ok');
                    } catch {
                        setMsg('Error');
                    }
                }}>
                Biometric | {msg}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
});

export default TestBiometric;
