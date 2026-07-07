import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/react-projects-hub",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router'],
                    'leaflet-vendor': ['leaflet', 'react-leaflet', 'wellknown'],
                    'motion-vendor': ['motion'],
                    'radix-vendor': [
                        '@radix-ui/themes',
                        '@radix-ui/react-alert-dialog',
                        '@radix-ui/react-dialog',
                        '@radix-ui/react-hover-card',
                        '@radix-ui/react-label',
                        '@radix-ui/react-separator',
                        '@radix-ui/react-slot',
                        '@radix-ui/react-tooltip',
                        'radix-ui',
                    ],
                    'three-vendor': ['three', 'three-stdlib', '@react-three/fiber', '@shadergradient/react'],
                    'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
                    'misc-vendor': ['lucide-react', 'react-icons', 'sonner', 'js-cookie', 'jwt-decode', 'axios'],
                },
            },
        },
    },
})