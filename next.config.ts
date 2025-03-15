import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextInt = createNextIntlPlugin({
    experimental: {
        createMessagesDeclaration: "./messages/en.json",
    },
});

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        icon: true,
                    },
                },
            ],
        });

        return config;
    },
};

export default withNextInt(nextConfig);
