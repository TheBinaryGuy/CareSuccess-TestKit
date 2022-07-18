import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>{children}</ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
});
