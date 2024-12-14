# Node-Clusterization
  Node.js Cluster Node.js is single-threaded by design, running on the event loop, which can limit its ability to fully utilize multi-core processors. To address this, the    Node.js Cluster module allows applications to fork multiple processes, called worker processes, that can run simultaneously, each handling separate tasks or requests.
  
  The Cluster module works by spawning multiple instances of the main application (worker processes) and distributing incoming client requests among them, leveraging all        available CPU cores. This significantly improves performance for CPU-intensive or high-traffic applications.

**How the Node.js Cluster Works**

**Master Process:**
  The master process is the primary process that spawns and manages the worker processes.
  It does not handle client requests directly; instead, it acts as a manager to distribute requests to workers.
  The master can monitor the health of worker processes, restart them if they crash, and perform other administrative tasks.

**Worker Processes:**
  Each worker is an independent Node.js process.
  Workers share the same server port, enabling load balancing among them.
  Workers can communicate with the master process using the built-in IPC (Inter-Process Communication) mechanism.
  Typically, a worker handles client requests and executes application logic.

**Load Balancing:**
  The master process uses a round-robin algorithm to distribute requests among workers.
  Alternatively, the operating system can handle load balancing in some environments.

**How to Start the Project:**
- Clone the repository.
- Install dependencies: npm i.
- Start the application: npm start.

