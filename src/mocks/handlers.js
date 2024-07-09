import {rest} from 'msw'
export const hanlders = [
    rest.get('https://api.themoviedb.org/3/movie/', (req, res, ctx)=>{
        return res(
            ctx.status(200),
            ctx.json({
                id: 1022789,
                results:[{
                    id: "6674f0f178b39f538271e0ec",
                    iso_639_1: "en",
                    iso_3166_1: "US",
                    key: "RY5aH21ohU4",
                    name: "Time to Celebrate",
                    official: true,
                    published_at: "2024-06-19T17:41:37.000Z",
                    site: "YouTube",
                    size: 1080,
                    type: "Trailer"
                }]
            })
        )
    })
]