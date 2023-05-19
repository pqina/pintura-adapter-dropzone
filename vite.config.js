import { resolve } from 'path';

export default {
    build: {
        type: ['iife', 'es'],
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'useEditorWithDropzone',
            fileName: 'useEditorWithDropzone',
            formats: ['es', 'iife'],
        },
        rollupOptions: {
            output: {
                globals: 'useEditorWithDropzone',
            },
        },
    },
};
