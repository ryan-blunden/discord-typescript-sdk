<!-- Start SDK Example Usage [usage] -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  const result = await discord.getOpenidConnectUserinfo({
    botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->