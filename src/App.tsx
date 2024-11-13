import {Refine} from "@refinedev/core";
import {DevtoolsPanel, DevtoolsProvider} from "@refinedev/devtools";
import {RefineKbar, RefineKbarProvider} from "@refinedev/kbar";

import {
    ErrorComponent,
    ThemedLayoutV2,
    ThemedSiderV2,
    useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
/*import dataProvider from "@refinedev/simple-rest";*/
import {App as AntdApp} from "antd";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {Header} from "./components/header";
import {ColorModeContextProvider} from "./contexts/color-mode";
import {
    BlogPostCreate,
    BlogPostEdit,
    BlogPostList,
    BlogPostShow,
} from "./pages/blog-posts";
import {
    CategoryCreate,
    CategoryEdit,
    CategoryList,
    CategoryShow,
} from "./pages/categories";
import {UserCreate, UserEdit, UserList, UserShow} from "./pages/users";
import {dataProvider} from "./providers/data-provider";
import {axiosInstance} from "./providers/axios";

function App() {
    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
                                dataProvider={dataProvider("https://localhost:7172/api", axiosInstance)}
                                notificationProvider={useNotificationProvider}
                                routerProvider={routerBindings}
                                resources={[
                                    {
                                        name: "user",
                                        list: "/user",
                                        create: "/user/create",
                                        edit: "/user/edit/:id",
                                        show: "/user/show/:id",
                                    },
                                ]}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "YgDNHi-CyGSfY-tBRxZK",
                                }}
                            >
                                <Routes>
                                    <Route
                                        element={
                                            <ThemedLayoutV2
                                                Header={() => <Header sticky/>}
                                                Sider={(props) => <ThemedSiderV2 {...props} fixed/>}
                                            >
                                                <Outlet/>
                                            </ThemedLayoutV2>
                                        }
                                    >
                                        <Route
                                            index
                                            element={<NavigateToResource resource="user"/>}
                                        />
                                        <Route path="/user">
                                            <Route index element={<UserList/>}/>
                                            <Route path="create" element={<UserCreate/>}/>
                                            <Route path="edit/:id" element={<UserEdit/>}/>
                                            <Route path="show/:id" element={<UserShow/>}/>
                                        </Route>
                                        <Route path="*" element={<ErrorComponent/>}/>
                                    </Route>
                                </Routes>

                                <RefineKbar/>
                                <UnsavedChangesNotifier/>
                                <DocumentTitleHandler/>
                            </Refine>
                            <DevtoolsPanel/>
                        </DevtoolsProvider>
                    </AntdApp>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
