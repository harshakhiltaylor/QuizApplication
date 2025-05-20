
import http from 'http';
import {Server} from "socket.io"
import { IoManager } from './managers/IoManager';

const server = http.createServer();

const io = IoManager.getIo();




io.on('connection', client => {
  
    client.on('event', data => {

  });

  client.on('disconnect', () => {

  });

});

server.listen(3000);