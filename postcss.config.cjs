module.exports = {
    plugins: {
        "postcss-preset-mantine": {},
        "postcss-simple-vars": {
            variables: {
                'mantine-breakpoint-xs': '320px',
                'mantine-breakpoint-sm': '425px',
                'mantine-breakpoint-md': '769px',
                'mantine-breakpoint-lg': '1200px',
                'mantine-breakpoint-xl': '1367px',
            },
        },
    },
};
