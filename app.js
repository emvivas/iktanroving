import path from 'path';
import { fileURLToPath } from 'url';
import http from "http";
import express from "express";
import {Server as WebSocketServer} from "socket.io";
import morgan from 'morgan';
import {createPool} from 'mysql2/promise';
import {PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE} from './config.js';


// Server essential constants

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.createServer(app);


// IKTAN Roving database access

export const pool = createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
});


// IKTAN Roving Telemetry objects' tokens

const wheelTokens = {"TopRightWheel": "VG9wUmlnaHRXaGVlbDp0cnIhU0NjRUBYZTJ4VDM1SmxKMw=="};


// WebSocket paths' configuration

const webSocketServerSettings = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transports: ["websocket", "polling"],
        credentials: true,
    },
    allowEIO3: true };
const wheelWebSocketServer = new WebSocketServer(server, { path: '/wheel/socket.io', ...webSocketServerSettings });
const seatWebSocketServer = new WebSocketServer(server, { path: '/seat/socket.io', ...webSocketServerSettings });
const toolWebSocketServer = new WebSocketServer(server, { path: '/tool/socket.io', ...webSocketServerSettings });
const sampleWebSocketServer = new WebSocketServer(server, { path: '/sample/socket.io', ...webSocketServerSettings });
const gadgetWebSocketServer = new WebSocketServer(server, { path: '/gadget/socket.io', ...webSocketServerSettings });


// Server middlewares and extensions

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));


// Server routes

app.get("/", (request, response)=>{

    response.send("Hello");
});
app.get("/wheel", (request, response)=>{
    response.render('file.ejs')
});
app.get("/ping", async (request, response)=>{
    const [rows] = await pool.query("CALL registerRoverObservation(@id, 7, 3, NULL);");
    console.log(rows);
    response.json(rows);
});


// wheelWebSocketServer events

wheelWebSocketServer.use((socket, next) => {
    const authClientHeader = socket.handshake.headers['authorization'];
    const clientToken = authClientHeader.split(' ')[1];
    console.log(`WHEEL CLIENT STATUS [${socket.id}].\tAuthorization credentials: ${authClientHeader}`);
    console.log(`WHEEL CLIENT STATUS [${socket.id}].\tServer request:\n`, socket.request);
    if (clientToken === wheelTokens["TopRightWheel"]) {
      return next();
    }
    console.log(`WHEEL CLIENT STATUS [${socket.id}].\tAuthentication error.`);
    return next(new Error(`WHEEL CLIENT STATUS [${socket.id}].\tAuthentication error.`));
  });

wheelWebSocketServer.on("connect_error", (error) => {
    console.log(error.message);
});

wheelWebSocketServer.on("connection", (socket) => {
    console.log(`WHEEL CLIENT STATUS [${socket.id}].\tAuthentication succesful.`);
    socket.emit("sendingDataServerRequest", {name: "Vivas", age: 21});
    socket.on("sendingDataClientAction", async (message)=>{
        console.log(message);
        if(message.PCB)
            await pool.query("CALL registerWheelRoverStatus(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [message.PCB, message.acceleration.x, message.acceleration.y, message.acceleration.z, message.rotation.x, message.rotation.y, message.rotation.z, message.rotationVelocity, message.RPM, message.surfaceDistance, message.internalTemperature]);
    });
    socket.on("disconnect", () => console.log(`WHEEL CLIENT STATUS [${socket.id}].\tClosed WebSocket connection.`));
});


// HTTP server initialization

server.listen(PORT, ()=>console.log(`\n\n\nIKTAN Roving 2023.\nNASA HERC Team.\nInstituto Tecnológico y de Estudios Superiores de Monterrey campus Cuernavaca.\n\n\nSERVER STATUS.\tIKTAN Roving's HTTP server working on port ${PORT}.`));