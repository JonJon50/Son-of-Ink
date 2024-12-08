// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en"> {/* Sets the <html> element with a lang attribute */}
            <Head>
                {/* Meta tags */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Title and Favicon */}
                <link rel="icon" href="/favicon.ico" />

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
