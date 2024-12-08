// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en"> {/* Sets the <html> element with a lang attribute */}
            <Head>
             
                {/* Additional styles */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    integrity="sha512-uDm1Zs+40pZpaPWWS6mzvgMTW1pnuSasjPBWe+79DI5+AxMTjSuzS3SMj9KKm9bJ2aDIz0FF2tzEtSqHnb8sGw=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
