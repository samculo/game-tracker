# game-tracker

Library with Fortnite, CSGO, Overwatch and Apex Legends stats \
`79` lines of code, `1` dependency

## Installation

Current stable version: `1.0`

```
$ npm install game-tracker
``` 

## Usage

```js
const GameStats = require('game-tracker');
const stats = new GameStats('your_key'); // Tracker Network key

async function getStats() {
    await stats.function('your_platform', 'your_nickname'); // returns JSON
};
```

*Example:*

```js
const GameStats = require('game-tracker');
const stats = new GameStats('your_key');

const prefix = '!';

client.on('message', async (message) => {
    if (message.content.startsWith(`${prefix}fortnite`)) {
        let msg = message.content.slice(10).split(', ');
        const fortniteStats = await stats.fortnite(msg[0], msg[1]);
        message.channel.send('Wins: ' + fortniteStats.stats.life_time[8].value);
    };
});
```

### Games

##### Fortnite

function - `fortnite(platform, nickname)` \
platforms - `kbm` + `gamepad` + `touch`

##### CSGO

function - `csgo(platform, nickname)` \
platform - `steam`

##### CSGO Segments

function - `csgoSegments(platform, nickname, segment)` \
platform - `steam` \
segments - `map` + `weapon`

##### Apex Legends

function - `apexLegends(platform, nickname)` \
platforms - `origin` + `xbl` + `psn`

##### Overwatch

function - `overwatch(platform, nickname)` \
platforms - `battlenet` + `xbl` + `psn`