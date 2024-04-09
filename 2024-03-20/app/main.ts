import app from './app'

function main(){
    app.listen({ port: 3000}, err => {
        if (err) throw err;
        console.log('[+] server listening on http://localhost:3000')
    });
}

main();