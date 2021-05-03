# DiscordRPCMaker-CLI
CLI utility for [Discord RPC Maker](https://drpcm.t1c.dev), for those who can't stand bloat.

## Install:
Fast install (Linux only):
```
wget https://github.com/ThatOneCalculator/DiscordRPCMaker-CLI/releases/download/v1.0.0/discordrpcmaker-cli
chmod +x ./discordrpcmaker-cli
sudo mv ./discordrpcmaker-cli /usr/bin/discordrpcmaker-cli
```

Manual binaries (Linux/Windows only):
**[[Linux](https://github.com/ThatOneCalculator/DiscordRPCMaker-CLI/releases/download/v1.0.0/discordrpcmaker-cli)]
[[Windows](https://github.com/ThatOneCalculator/DiscordRPCMaker-CLI/releases/download/v1.0.0/discordrpcmaker-cli.exe)]**

From source:
```
git clone https://github.com/ThatOneCalculator/DiscordRPCMaker-CLI/
cd DiscordRPCMaker-CLI
npm i
node ./index.js fileid
```

## Run:
Get the file ID from the main app
`discordrpcmaker-cli fileid` to run.

Run in the background with `discordrpcmaker-cli fileid & disown` on Linux/macOS or `start /b discordrpcmaker-cli.exe fileid` on Windows.
