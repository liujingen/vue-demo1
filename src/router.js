module.exports = {
    routes: [    
        {
            path: '/about',
            component: require('./views/about.vue')
        },
        {
            path: '/user',
            component: require('./views/user.vue')
        }        
    ]
}