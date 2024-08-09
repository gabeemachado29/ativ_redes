const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(`Dados recebidos: ${data}`);
        // Processa os dados aqui (ex: enviar uma resposta)
        socket.write('Mensagem do servidor');
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor TCP ouvindo na porta 3000');
});
