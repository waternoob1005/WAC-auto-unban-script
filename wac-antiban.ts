import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";

events.playerJoin.on((ev) => {
    const pl = ev.player
    const plname = pl.getName()

    bedrockServer.executeCommand(`wac unban ${plname}`)
})