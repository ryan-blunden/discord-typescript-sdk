# UserCollectiblesResponse

## Example Usage

```typescript
import { UserCollectiblesResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UserCollectiblesResponse = {
  nameplate: {
    skuId: "<value>",
    asset: "<value>",
    label: "<value>",
    palette: "black",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `nameplate`                                                                          | [components.UserNameplateResponse](../../models/components/usernameplateresponse.md) | :heavy_check_mark:                                                                   | Object mapping of nameplate data                                                     |