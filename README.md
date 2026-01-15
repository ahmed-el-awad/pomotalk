## About 
Pomotalk is a pomodoro based collaborative task management desktop application, made for friends who would like to be productive together :)

This project is currently a **Work in Progress** and development on it is slow. But it is nice to come back to work on it every now and then when I feel like it.

The application is currently built on top of 
- Nextron (Next.js + Electron)
- Websockets (ws)

## Installation

The project uses [yarn](https://yarnpkg.com/) as the package manager, if you use a different package manager you may run into problems with running the application.

```
git clone https://github.com/ahmed-el-awad/pomotalk

cd pomotalk 

yarn install
```

### Running the App

You have two parts of the application, the client and the server.
You need to run both on separate terminals for this to work properly.

To run the client, at the root directory run
```
yarn run dev
```

And to run the server, from the root directory run
```
cd server

yarn install

yarn run server
```
