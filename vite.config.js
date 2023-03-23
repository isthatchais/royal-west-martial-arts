import {
    resolve
} from 'path';
import {
    defineConfig
} from 'vite';

export default defineConfig({
    root: 'src/',

    build: {
        minify: false,
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                cart: resolve(__dirname, 'src/cart/index.html'),
                checkout: resolve(__dirname, 'src/checkout/index.html'),
                program1: resolve(__dirname, 'src/program-description/index.html'),
                formListing: resolve(__dirname, 'src/form-listing/index.html'),
                admin: resolve(__dirname, 'src/admin/index.html'),
                mailForm: resolve(__dirname, 'src/mail-form/index.html'),
            },
        },
    },
});
