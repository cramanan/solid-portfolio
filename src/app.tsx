import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ParentProps } from "solid-js";
import Header from "~/components/Header";
import { AppContextProvider } from "./AppContext";
import "./app.css";
import Footer from "./components/Footer";

function RootLayout(props: ParentProps) {
    return (
        <AppContextProvider>
            <Header />
            {props.children}
            <Footer />
        </AppContextProvider>
    );
}

export default function App() {
    return (
        <Router explicitLinks root={RootLayout}>
            <FileRoutes />
        </Router>
    );
}
