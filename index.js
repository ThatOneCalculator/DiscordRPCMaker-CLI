#!/usr/bin/env node

const RPC = require('discord-rpc')
const fs = require('fs')
const os = require('os')
const path = require('path')

const slash = os.platform() == 'win32' ? "\\" : "/"
const dir = `${os.userInfo().homedir}/${process.platform === 'win32' ? '/AppData/Roaming/drpcm/' : '/.config/drpcm/'}`

const args = process.argv.slice(2)
const id = args[0]

let client = new RPC.Client({ transport: 'ipc' })

let opendir = dir.replace("/", "\\").replace("\\\\", "\\")
let fullpath = os.platform() == "win32" ? opendir + "\\" + id + ".json" : dir + "/" + id + ".json"
let settingspath = os.platform() == "win32" ? opendir + "\\" + "settings.json" : dir + "/" + "settings.json"
let options = JSON.parse(fs.readFileSync(fullpath, 'utf8'))
let settings = JSON.parse(fs.readFileSync(settingspath, 'utf8'))
let activity = {}
let assets = {}

if (options.largeimage !== '') {
  activity.largeImageKey = options.largeimage
  // If you change this and some asks about this, please still give me credit :)
  activity.largeImageText = "Made with ThatOneCalculator's Discord RPC Maker (v2.0 CLI)!"
}
if (options.smallimage !== '') {
  activity.smallImageKey = options.smallimage
  // Same applies with assets.large_text
  activity.smallImageText = 'https://drpcm.t1c.dev/'
}
if (assets !== {}) { activity.assets = assets }
if (options.description !== '') { activity.details = options.description }
if (options.state !== '') { activity.state = options.state }
if (options.buttons.length !== 0) { activity.buttons = options.buttons }

if (settings.showtimestamp == true) {
  activity.startTimestamp = Date.now()
}

function assembleClient(timeout = 5000) {
  client.destroy()
  client = new RPC.Client({ transport: 'ipc' })
  client.on('ready', () => {
    running = true;
    client.setActivity(activity);
    client.transport.socket.on("close", (c, s) => {
      assembleClient()
    })
  })
  setTimeout(() => client.login({ clientId: options.clientid }), timeout)
}

process.on("unhandledRejection", e => {
  if (e.message === "Could not connect") {
    console.log("Crashed! Retrying...")
    assembleClient()
  }
})

assembleClient(1000)

console.log("Started!")