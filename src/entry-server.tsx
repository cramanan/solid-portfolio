// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <script src="/preload.js"></script>
                    <link
                        rel="preload"
                        href="/assets/fonts/NeueMontreal-Bold.woff"
                        as="font"
                        type="font/woff"
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/NeueMontreal-Regular.woff"
                        as="font"
                        type="font/woff"
                    />
                    <link rel="preload" as="image" href="/picture.webp" />
                    {assets}
                </head>
                <body>
                    <div id="app">{children}</div>
                    {scripts}
                </body>
            </html>
        )}
    />
));
