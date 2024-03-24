import app from './app'

function main() {
    app.listen({ port: 3000 }, err => {
        if (err) throw err;
        console.log(`server listening on 0.0.0.0:3000`)
    })
}

main();