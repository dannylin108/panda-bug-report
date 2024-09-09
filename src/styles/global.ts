import { defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
    '.book-content': {
        p: {
            marginBottom: '1rem',
            lineHeight: '1.6',
            fontSize: '1rem',
        },
        'li': {
            marginBottom: '0.5rem',
        },
    }
});

export default globalCss;
