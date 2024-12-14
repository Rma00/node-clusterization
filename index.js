/**
 * @description Initiate Server Setup::
 * @author Dev.....
 */

'use strict'



const cluster = require('cluster');
const os = require('os');

// Built-in Modules
const http = require('http');

// NPM Modules
const express = require('express');
const responseTime = require('response-time');
const cors = require('cors');


// Custom Modules
const { application } = require('./config');
const { middleware } = require('./middleware/controllers');
const routes = require('./routes/routes');

// Function to create server
const createServer = () => {
  // Initiate express
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(responseTime((req, res, time) => console.log(req.method, req.url, time.toFixed(2))));
  app.use((error, req, res, next) => middleware.trackRequest(error, req, res, next));

  // Serve routes
  routes.handler(app);

  return app;
};

// Clustering logic
const startClusteredServer = () => {
  // Get the number of CPU cores
  const numCPUs = os.cpus().length;

  if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    // Handle worker exit and restart
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died. Restarting...`);
      cluster.fork();
    });
  } else {
    // Workers can share any TCP connection
    // In this case, it is an HTTP server
    const app = createServer();
    
    const server = http.createServer(app).listen(application.port, () => {
      console.log(`Node worker started at: ${new Date().toLocaleString()}`);
      console.log(`Worker PID: ${process.pid}`);
      console.log(`HTTP Port: ${application.port}`);
    });

    server.timeout = 1800000; // Set timeout to 30 minutes

    console.log(`Worker ${process.pid} started`);
  }
};

// Start the clustered server
startClusteredServer();
