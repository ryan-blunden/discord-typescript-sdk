# OAuth2GetKeys

## Example Usage

```typescript
import { OAuth2GetKeys } from "@ryan.blunden/discord-sdk/models/components";

let value: OAuth2GetKeys = {
  keys: [
    {
      kty: "<value>",
      use: "<value>",
      kid: "<id>",
      n: "<value>",
      e: "<value>",
      alg: "<value>",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `keys`                                                         | [components.OAuth2Key](../../models/components/oauth2key.md)[] | :heavy_check_mark:                                             | N/A                                                            |