# liveArduino
This is a demo project, basicaly, to demonstrate how easy it is to create web apps with node.js.

# Why this repo exist in the first place?
Initially I wanted to build a seismometer which would send data to an Arduino microcontroller. Through the serial COM port
I wanted to extract data and serve it over the internet in real-time. That's the reasoon I used node.js as it is highly
scalable and Javascript has a fairly easy to learn paradigm.
So, at last i built and assembled all the components. Now the design was literally like this:
    Seismometer->Arduino->COMs->node.js->socket.io->client
As I am just a beginner and summer vacations are over I have no time to integrate a login/auth system. This project was built
under a week just for demonstrational purpose and would be futhure upgraded.

  Moreover, I've currently not included the arduino sketch, but it can be replaced with any other device transmitting data
  over serial COM port.

# app.js
It has merely 50 lines of code which serves data directly from serial COM port over socket. It serves when an event is emitted
from client side.

# index.html
Basically it loops over an 'emit' event indefinately in order to recieve data from app.js in real time. It makes request every
2 seconds. For visualizations I've used smoothie.js to draw graph. 

# Summing Up:
  This shows that devices(arduino, raspberry pi, particularly) can be read and data can be served to the client in 'real-time'.
  Furthur, real-time visualization of data have many other applications in todays tech.
