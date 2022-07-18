import {
    MD3LightTheme as PaperTheme,
    Provider as PaperProvider,
    Theme,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from 'src/screens/Home';

const theme: Theme = {
    ...PaperTheme,
    colors: {
        ...PaperTheme.colors,
        primary: '#50A555',
        secondary: '#0194D6',
    },
};

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaProvider>
                <Home />
            </SafeAreaProvider>
        </PaperProvider>
    );
};

export type AppTheme = typeof PaperTheme;

export default App;
