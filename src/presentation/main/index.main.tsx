import { FC } from "react";
import { Routes } from "@/presentation/ui/routes/route";
import { IMain } from "./types/main.type";
import { useMain } from "./hooks/main.hook";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";

export const Main: FC<IMain.Input> = (props = {}) => {

    const { onLayoutRootView, initialRoute, isLoaded } = useMain(props);

    if (!isLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <View
                    className="flex-1" testID="main" onLayout={onLayoutRootView}>
                    <Routes initialRoute={initialRoute} />
                    <StatusBar style="light" />
                </View>
            </SafeAreaProvider>
        </NavigationContainer>

    );
};
