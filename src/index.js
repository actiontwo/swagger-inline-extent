#! /usr/bin/env node

const cli = require('./cli');
const swaggerInline = require('./swagger-inline-extent');

if (require.main === module) {
    cli(process.argv);
} else {
    module.exports = swaggerInline;
}
