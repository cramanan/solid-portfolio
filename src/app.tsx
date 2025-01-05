import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { AppContextProvider } from "./AppContext";
import { MetaProvider } from "@solidjs/meta";

export default function App() {
    return (
        <MetaProvider>
            <Router
                root={(props) => (
                    <AppContextProvider>
                        <Nav />
                        <Suspense>{props.children}</Suspense>
                    </AppContextProvider>
                )}
            >
                <FileRoutes />
            </Router>
        </MetaProvider>
    );
}
