const swaggerAutogen = require('swagger-autogen')();

const doc  = {
    info: {
        title: "key API",
        description: "Des", 
    },
    host: 'localhost:4000',
    schemes: ['http'],
}

const outputFile = './swagger-output.json';

const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(()=>{
    require('./index.js');
});
