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

const pool = createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    connectionLimit: 10
});


// IKTAN Roving Telemetry objects' tokens

const seatTokens = {
                    "PilotSeat": "UGlsb3RTZWF0OjFhcE1MXkZSTjJCQCR2NzQzNHVR",
                    "CopilotSeat": "VG9wTGVmdFdoZWVsOjNCSFhAWjV2cWluJUdjMyYzY0Uq"
                    };

const wheelTokens = {
                    "TopRightWheel": "VG9wUmlnaHRXaGVlbDp0cnIhU0NjRUBYZTJ4VDM1SmxKMw==",
                    "TopLeftWheel": "VG9wTGVmdFdoZWVsOjNCSFhAWjV2cWluJUdjMyYzY0Uq",
                    "BottomRightWheel": "VG9wUmlnaHRXaGVlbDp0cnIhU0NjRUBYZTJ4VDM1SmxKMw==",
                    "BottomLeftWheel": "VG9wUmlnaHRXaGVlbDp0cnIhU0NjRUBYZTJ4VDM1SmxKMw=="
                    };


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
//const toolWebSocketServer = new WebSocketServer(server, { path: '/tool/socket.io', ...webSocketServerSettings });
//const sampleWebSocketServer = new WebSocketServer(server, { path: '/sample/socket.io', ...webSocketServerSettings });
//const gadgetWebSocketServer = new WebSocketServer(server, { path: '/gadget/socket.io', ...webSocketServerSettings });


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
    if (clientToken === wheelTokens["TopRightWheel"] || 
        clientToken === wheelTokens["TopLeftWheel"]) {
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
            await pool.query("CALL registerWheelRoverStatus(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [message.PCB, message.acceleration.x, message.acceleration.y, message.acceleration.z, message.rotation.x, message.rotation.y, message.rotation.z, message.rotationVelocity, message.RPM, message.surfaceDistance, message.internalTemperature, message.register]);
    });
    socket.on("disconnect", () => console.log(`WHEEL CLIENT STATUS [${socket.id}].\tClosed WebSocket connection.`));
});

seatWebSocketServer.use((socket, next) => {
    const authClientHeader = socket.handshake.headers['authorization'];
    const clientToken = authClientHeader.split(' ')[1];
    console.log(`SEAT CLIENT STATUS [${socket.id}].\tAuthorization credentials: ${authClientHeader}`);
    console.log(`SEAT CLIENT STATUS [${socket.id}].\tServer request:\n`, socket.request);
    if (clientToken === seatTokens["PilotSeat"] || 
        clientToken === seatTokens["CopilotSeat"]) {
      return next();
    }
    console.log(`SEAT CLIENT STATUS [${socket.id}].\tAuthentication error.`);
    return next(new Error(`SEAT CLIENT STATUS [${socket.id}].\tAuthentication error.`));
  });

seatWebSocketServer.on("connect_error", (error) => {
    console.log(error.message);
});

seatWebSocketServer.on("connection", (socket) => {
    console.log(`SEAT CLIENT STATUS [${socket.id}].\tAuthentication succesful.`);
    socket.emit("sendingDataServerRequest", {name: "Vivas", age: 21});
    socket.on("sendingDataClientAction", async (message)=>{
        console.log(message);
        if(message.PCB)
            await pool.query("CALL registerSeatRoverStatus(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [message.PCB, message.acceleration.x, message.acceleration.y, message.acceleration.z, message.rotation.x, message.rotation.y, message.rotation.z, message.surfaceDistance, message.temperature.internal[0], message.temperature.internal[1], message.temperature.external, message.humidity.external, message.RZero.measured, message.RZero.calculated, message.airQualityResistance, message.PPM.measured, message.PPM.calculated, message.atmosphericPressure.measured, message.atmosphericPressure.calculated, message.altitude, message.luxRadiation[0].measured, message.luxRadiation[0].voltage, message.luxRadiation[1].measured, message.luxRadiation[1].voltage, message.magnetism.measured, message.magnetism.voltage, message.UVRadiation.measured, message.UVRadiation.voltage, message.locationService.GPSDateTime, message.locationService.GPSFix.measured, message.locationService.GPSFix.quality, 
            message.locationService.geographicalCoordinates ? message.locationService.geographicalCoordinates.latitude : null, 
            message.locationService.geographicalCoordinates ? message.locationService.geographicalCoordinates.longitude : null, 
            message.locationService.geographicalCoordinates ? message.locationService.geographicalCoordinates.altitude : null, 
            message.locationService.satelliteAvailability ? message.locationService.satelliteAvailability : null, 
            message.locationService.GPSAngle ? message.locationService.GPSAngle : null, 
            message.locationService.antennaStatus ? message.locationService.antennaStatus : null, 
            message.locationService.knotsSpeed ? message.locationService.knotsSpeed : null, message.register]);
        });
    socket.on("disconnect", () => console.log(`SEAT CLIENT STATUS [${socket.id}].\tClosed WebSocket connection.`));
});


// HTTP server initialization

server.listen(PORT, ()=>console.log(`\n\n\nIKTAN Roving 2023.\nNASA HERC Team.\nInstituto Tecnológico y de Estudios Superiores de Monterrey campus Cuernavaca.\n\n\nSERVER STATUS.\tIKTAN Roving's HTTP server working on port ${PORT}.`));