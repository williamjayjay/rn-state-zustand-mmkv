import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IRoute } from './types/route.type';
import { TabRoutes } from '@/presentation/ui/routes/components/TabRoutes/index.tabRoutes.routes';

const RootStackNavigator = createNativeStackNavigator<IRoute.PublicStackRoutes>();

type RoutesProps = Pick<IRoute.Input, 'initialRoute'>;

const Routes: FC<RoutesProps> = ({ initialRoute }) => {

  return (
    <RootStackNavigator.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }} initialRouteName={initialRoute.rootStackScreen}>

      <RootStackNavigator.Screen name="Tabs" component={TabRoutes}
      options={{headerShown:false}}
      />
    
    </RootStackNavigator.Navigator>
  );
};

export { Routes };
