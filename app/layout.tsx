import { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const metadata: Metadata = {
    title: "Free Online Games for All Ages - Coming soon! - Etech.com",
    description:
        "Explore the Best Online Free Games - Immerse Yourself in a World of Fun and Adventure. Discover Thousands of Exciting Games and Start Playing Now!",
    icons: {
        icon: "/favicon.png",
    },
};

export default async function RootLayout({ children }: Props) {
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className="antialiased">
                <NextIntlClientProvider>
                    <div>{children}</div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
