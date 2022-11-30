export default defineNuxtConfig({
    runtimeConfig: {
        LOCAL_MONGODB_URI: "mongodb://0.0.0.0:27017",
        MONGODB_URI: "mongodb+srv://Egor:T6QCmL8PQSTG5CWW@cluster.n2sxrln.mongodb.net/?retryWrites=true&w=majority"
    },
    modules: [
        "@pinia/nuxt",
        "@nuxt/image-edge"
    ],
    app: {
        pageTransition: {
            name: "vanish",
            mode: "out-in"
        },
        head: {
            link: [
                {
                    rel: "icon",
                    href: "/logo_icon.png"
                }
            ]
        }
    }
});