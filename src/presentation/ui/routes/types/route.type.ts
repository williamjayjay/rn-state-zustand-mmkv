
export namespace IRoute {

    export interface Input {
        initialRoute: {
            rootStack: "public";
            rootStackScreen: "Tabs";
        };
    }

    export type RootStackParamList = {
        public: {
            screen: "Tabs";
        }
    }

    export type PublicStackRoutes = {
        "Tabs": undefined;
    };

    export type PublicTabsRoutes = {
        "Início": undefined;
        "Carrinho": undefined;
        "Perfil": undefined;
    };
}




