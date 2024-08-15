import { type FC, type ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    View,
} from 'react-native';

const SafeAreaContainer: FC<{
    children: ReactNode;
    className:string;
}> = ({
    children,
    className
}) => {
        const insets = useSafeAreaInsets();

        return (
            <View className={className} style={{ flex:1, paddingTop: 8, paddingBottom: insets.bottom + 74, paddingHorizontal: 16 }}>
                {children}
            </View>

        );
    };

export { SafeAreaContainer }