const app = require('./App');
require('./database');


async function main() {
    await app.listen(8000, () => console.log('funcionando'));
}

main();