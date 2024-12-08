// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en"> {/* Sets the <html> element with a lang attribute */}
            <Head>
             
                {/* Additional styles */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-p9S1+gfFjJoP6Jd0FpjsX3mF5Hc78OkX+fpA6U1dtLM6ibP/j8FhRjG+lRH1POawtrUVgd89WaGTwvi/LpKG1Q=="
                    crossOrigin="anonymous"
                />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
