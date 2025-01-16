import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ParentProps, Suspense } from "solid-js";
import Header from "~/components/Header";
import "./app.css";
import { AppContextProvider } from "./AppContext";
import { MetaProvider } from "@solidjs/meta";

function RootLayout(props: ParentProps) {
    return (
        <AppContextProvider>
            <Header />
            <Suspense>{props.children}</Suspense>
        </AppContextProvider>
    );
}

export default function App() {
    return (
        <MetaProvider>
            <Router explicitLinks root={RootLayout}>
                <FileRoutes />
            </Router>
        </MetaProvider>
    );
}
