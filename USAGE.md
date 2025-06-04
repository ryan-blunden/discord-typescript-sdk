<!-- Start SDK Example Usage [usage] -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.applications.getMe();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->