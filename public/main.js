const socket = io("http://localhost:5000", { 
    path: '/wheel/socket.io', 
    transportOptions: {
        polling: {
            extraHeaders: {
                'authorization': 'Bearer abc',
            },
        },
  },
})

socket.on("ping", (message)=>{
    console.log("Ok!")
    console.log(message)
    socket.emit("pong", {status: "ok"});
});

socket.on("connect_error", (err) => {
    console.log(err.message);
  });