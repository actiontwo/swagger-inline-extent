const swaggerInline = require(`../src/swagger-inline-extent`);
const fse = require('fs-extra')
swaggerInline([`${__dirname}/index.js`], {
    base: `${__dirname}/swaggerBase.yaml`,
    replace:{
        replace:'api/v1',
        path:"https://example.com/api/v1",
        a:{b:{c:1}}
    }
}).then( (generatedSwagger) => {
    // console.log(generatedSwagger)
    let filename = `${__dirname}/doc/api.yml`
    fse.outputFileSync(filename,generatedSwagger)
});