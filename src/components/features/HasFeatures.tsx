import * as Device from 'expo-device';
import { useEffect, useState } from 'react';
import { List } from 'react-native-paper';

const HasFeatures = () => {
    const [hasNFC, setHasNFC] = useState<'Waiting' | 'No' | 'Yes'>('Waiting');

    useEffect(() => {
        Device.hasPlatformFeatureAsync('android.hardware.nfc').then(nfc =>
            setHasNFC(nfc ? 'Yes' : 'No')
        );
    });

    return (
        <>
            <List.Item title={hasNFC} description='Has NFC?' />
        </>
    );
};

export default HasFeatures;
