import { AppTheme } from 'App';
import { StorageAccessFramework } from 'expo-file-system';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const TestReadWrite = () => {
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
                icon='file'
                loading={msg === 'Waiting'}
                color={msg === 'Denied' ? error : undefined}
                onPress={async () => {
                    try {
                        setMsg('Waiting');
                        let permissions =
                            await StorageAccessFramework.requestDirectoryPermissionsAsync();
                        if (!permissions.granted) {
                            setMsg('Denied');
                            return;
                        }

                        const data = 'TEST';

                        const fileUri =
                            await StorageAccessFramework.createFileAsync(
                                permissions.directoryUri,
                                'test.txt',
                                'text/plaintext'
                            );

                        await StorageAccessFramework.writeAsStringAsync(
                            fileUri,
                            data
                        );

                        const readData =
                            await StorageAccessFramework.readAsStringAsync(
                                fileUri
                            );

                        if (data === readData) {
                            setMsg('Ok');
                        } else {
                            setMsg('Error');
                            console.log(readData, data);
                        }
                    } catch {
                        setMsg('Error');
                    }
                }}>
                File Read + Write | {msg}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
});

export default TestReadWrite;
