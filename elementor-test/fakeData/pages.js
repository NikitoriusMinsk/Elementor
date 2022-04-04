export default {
    main : {
        name: 'wrapper',
        key: 'wrapper',
        children: [
            {
                name: 'header',
                key: 'header',
                children: [
                    {
                        name: 'title',
                        key: 'title',
                        children: [
                            {
                                name: 'text',
                                key: 'text1',
                                text: 'Main Header'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'content',
                key: 'content',
                children: [
                    {
                        name: 'text',
                        key: 'text2',
                        text: 'Main Content'
                    },
                ]
            },
            {
                name: 'footer',
                key: 'footer',
                children: [
                    {
                        name: 'text',
                        key: 'text3',
                        text: 'Main Footer'
                    },
                ]
            }
        ]
    },
    info: {
        name: 'wrapper',
        key: 'wrapper',
        children: [
            {
                name: 'header',
                key: 'header',
                children: [
                    {
                        name: 'title',
                        key: 'title',
                        children: [
                            {
                                name: 'text',
                                key: 'text1',
                                text: 'Info Header'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'content',
                key: 'content',
                children: [
                    {
                        name: 'text',
                        key: 'text2',
                        text: 'Info Content'
                    },
                ]
            },
            {
                name: 'footer',
                key: 'footer',
                children: [
                    {
                        name: 'text',
                        key: 'text3',
                        text: 'Info Footer'
                    },
                ]
            }
        ]
    },
    blog: {
        name: 'wrapper',
        key: 'wrapper',
        children: [
            {
                name: 'header',
                key: 'header',
                children: [
                    {
                        name: 'title',
                        key: 'title',
                        children: [
                            {
                                name: 'text',
                                key: 'text1',
                                text: 'Blog Header'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'content',
                key: 'content',
                children: [
                    {
                        name: 'text',
                        key: 'text2',
                        text: 'Blog Content'
                    },
                ]
            },
            {
                name: 'footer',
                key: 'footer',
                children: [
                    {
                        name: 'text',
                        key: 'text3',
                        text: 'Blog Footer'
                    },
                ]
            }
        ]
    }
}