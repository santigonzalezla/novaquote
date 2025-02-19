import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
};

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme()`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}


export default nextConfig;
