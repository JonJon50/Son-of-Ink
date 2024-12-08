import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en"> {/* Sets the <html> element with a lang attribute */}
            <Head>
                {/* Charset Meta */}
                <meta charSet="UTF-8" />

                {/* Viewport meta is not required here because Next.js automatically injects it in the `_app.jsx` */}

                {/* Global Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Global CSS (e.g., Tailwind or custom CSS) */}
                {/* External styles like Tailwind are better imported in _app.js */}
                {/* Remove this line: <link rel="stylesheet" href="/styles/tailwind.css" /> */}

                {/* Font Awesome */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    integrity="sha512-uDm1Zs+40pZpaPWWS6mzvgMTW1pnuSasjPBWe+79DI5+AxMTjSuzS3SMj9KKm9bJ2aDIz0FF2tzEtSqHnb8sGw=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <body>
                <Main /> {/* This renders the current page */}
                <NextScript /> {/* This injects Next.js scripts */}
            </body>
        </Html>
    );
}
