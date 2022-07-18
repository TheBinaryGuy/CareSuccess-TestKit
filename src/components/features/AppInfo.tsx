import * as Application from 'expo-application';
import { List } from 'react-native-paper';

const AppInfo = () => {
    return (
        <>
            <List.Item title={Application.androidId} description='Android Id' />
            <List.Item
                title={Application.applicationId}
                description='Application Id'
            />
            <List.Item
                title={Application.applicationName}
                description='Application Name'
            />
            <List.Item
                title={Application.nativeApplicationVersion}
                description='Application Version'
            />
            <List.Item
                title={Application.nativeBuildVersion}
                description='Build Version'
            />
        </>
    );
};

export default AppInfo;
