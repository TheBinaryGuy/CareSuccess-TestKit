import * as Device from 'expo-device';
import { List } from 'react-native-paper';
import humanFileSize from 'src/utils/humanizedFileSize';

const DeviceInfo = () => {
    return (
        <>
            <List.Item title={Device.manufacturer} description='Manufacturer' />
            <List.Item title={Device.brand} description='Brand' />
            <List.Item title={Device.deviceName} description='Device Name' />
            <List.Item
                title={Device.deviceYearClass}
                description='Device Year Class'
            />
            <List.Item title={Device.modelName} description='Model Name' />
            <List.Item
                title={Device.osVersion}
                description='OS / Android Version'
            />
            <List.Item
                title={Device.platformApiLevel}
                description='Platform Api Level'
            />
            <List.Item
                title={humanFileSize(Device.totalMemory ?? 0)}
                description='Total Memory'
            />
        </>
    );
};

export default DeviceInfo;
