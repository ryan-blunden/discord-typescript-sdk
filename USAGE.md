<!-- Start SDK Example Usage [usage] -->
```typescript
import { Discord } from "@ryan.blunden/discord-sdk";

const discord = new Discord();

async function run() {
  await discord.applications.partnerSDKUnmergeProvisionalAccount({
    clientId: "<value>",
    externalAuthToken: "<value>",
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->