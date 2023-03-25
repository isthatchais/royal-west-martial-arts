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
                program1: resolve(__dirname, 'src/program-description/index.html'),
                formListing: resolve(__dirname, 'src/form-listing/index.html'),
                formPages: resolve(__dirname, 'src/form-pages/index.html'),
                admin: resolve(__dirname, 'src/admin/index.html'),
                mailForm: resolve(__dirname, 'src/mail-form/index.html'),
                location: resolve(__dirname, 'src/location/index.html'),
                signUp: resolve(__dirname, 'src/sign-up/index.html'),
            },
        },
    },
});
