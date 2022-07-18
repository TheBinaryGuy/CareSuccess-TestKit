import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type TestState = 'Not Tested' | 'Ok' | 'Error' | 'Denied';

interface ITestStore {
    getTest: () => TestState;
}

export const useTestStore = create<ITestStore>()(
    persist(
        (_set, _get) => ({
            getTest: () => 'Ok',
        }),
        {
            name: 'TestStore',
            getStorage: () => AsyncStorage,
        }
    )
);
