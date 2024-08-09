const net = require('net');

const client = new net.Socket();
client.connect(3000, '127.0.0.1', () => {
    console.log('Conectado ao servidor');
    client.write('Olá, servidor!');
});

client.on('data', (data) => {
    console.log(`Dados recebidos do servidor: ${data}`);
    client.end();
});

client.on('error', (err) => {
    console.error(err);
});
