import React, { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@/presentation/ui/screens/public/Home";
import { ProfileScreen } from "@/presentation/ui/screens/public/Profile";
import { CartScreen } from "@/presentation/ui/screens/public/Cart";
import { IRoute } from "@/presentation/ui/routes/types/route.type";
import { useProductsStore } from "@/@core/store/cartStore";
import Feather from '@expo/vector-icons/Feather';

const TabNavigator = createBottomTabNavigator<IRoute.PublicTabsRoutes>();

const TabRoutes = () => {

    const { items } = useProductsStore()

    return (

        <TabNavigator.Navigator
            initialRouteName="Início"
            sceneContainerStyle={{ backgroundColor: '#F0F5F9' }}
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#F0F5F9',
                tabBarInactiveTintColor: '#667085',
                tabBarStyle: {
                    position: 'absolute',
                    borderTopWidth: 0,
                    bottom: 10,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    height: 60,
                    borderRadius: 16,
                    backgroundColor: '#311D3F',
                },
            }}>
            <TabNavigator.Screen
                name="Início"
                component={HomeScreen}

                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#451952',
                    },
                    headerTitleStyle: {
                        fontFamily: 'Karla_500Medium',
                        fontSize: 22,
                    },
                    headerTintColor: '#F0F5F9',
                    headerRight: () => (
                        <TouchableOpacity
                            className='flex-row items-center'
                            onPress={() => navigation.navigate("Carrinho")}>
                            <Text className='font-karla500Medium text-base-light mr-2 text-base'>{items}</Text>
                        </TouchableOpacity>
                    ),

                    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => {
                        if (focused) {
                            return (
                                <View className="w-11 h-11 rounded-full bg-[#475467] items-center justify-center ">
                                    <Feather name="home" size={22} color={color} />
                                  
                                </View>
                            );
                        }

                        return <Feather name="home" size={22} color={color} />;

                    },

                })}
            />

            <TabNavigator.Screen
                name="Carrinho"
                component={CartScreen}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#451952',
                    },
                    headerTitleStyle: {
                        fontFamily: 'Karla_500Medium',
                        fontSize: 22,
                    },
                    headerTintColor: '#F0F5F9',
                    headerRight: () => (
                        <TouchableOpacity
                            className='flex-row items-center'
                            onPress={() => navigation.navigate("Carrinho")}>
                            <Text className='font-karla500Medium text-base-light mr-2 text-base'>{items}</Text>
                        </TouchableOpacity>
                    ),

                    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => {
                        if (focused) {
                            return (
                                <View className="w-11 h-11 rounded-full bg-[#475467] items-center justify-center ">
                                    <Feather name="shopping-cart" size={22} color={color} />
                                    {/* <View
                                        style={{ position: 'absolute', bottom: 0 }}
                                        className="bg-main-700 h-[5px] w-6 rounded  rounded-tl rounded-tr "
                                    /> */}
                                </View>
                            );
                        }

                        return <Feather name="shopping-cart" size={22} color={color} />;
                    },

                })}
            />

            <TabNavigator.Screen
                name="Perfil"
                component={ProfileScreen}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#451952',
                    },
                    headerTitleStyle: {
                        fontFamily: 'Karla_500Medium',
                        fontSize: 22,
                    },
                    headerTintColor: '#F0F5F9',

                    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => {
                        if (focused) {
                            return (
                                <View className="w-11 h-11 rounded-full bg-[#475467] items-center justify-center ">
                                    <Feather name="user" size={22} color={color} />
                                  
                                </View>
                            );
                        }

                        return <Feather name="user" size={22} color={color} />
                    },

                })}
            />
        </TabNavigator.Navigator>
    )
}

export { TabRoutes }