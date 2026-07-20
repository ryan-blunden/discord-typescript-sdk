# UpdateMyApplicationResponse

## Example Usage

```typescript
import { UpdateMyApplicationResponse } from "@ryan.blunden/discord-sdk/models/operations";

let value: UpdateMyApplicationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<value>",
    name: "<value>",
    icon: "<value>",
    description: "offend indeed since astride armchair until private",
    type: 4,
    verifyKey: "<value>",
    flags: 778992,
    flagsNew: "<value>",
    redirectUris: [
      "https://shocked-shark.net",
      "https://rigid-accountability.net",
      "https://trusting-analogy.info/",
    ],
    interactionsEndpointUrl: "https://ajar-issue.info",
    roleConnectionsVerificationUrl: "https://vibrant-stock.info/",
    owner: {
      id: "<value>",
      username: "Nikita13",
      avatar: "https://picsum.photos/seed/Wz4mNi/1925/742",
      discriminator: "<value>",
      publicFlags: 645023,
      flags: 57193,
      globalName: "<value>",
      primaryGuild: {
        identityGuildId: "<value>",
        identityEnabled: false,
        tag: "<value>",
        badge: "<value>",
      },
    },
    approximateGuildCount: 987510,
    approximateUserInstallCount: 286968,
    approximateUserAuthorizationCount: 18141,
    explicitContentFilter: 1,
    team: {
      id: "<value>",
      icon: "<value>",
      name: "<value>",
      ownerUserId: "<value>",
      members: [
        {
          user: {
            id: "<value>",
            username: "Dora.Toy69",
            avatar: "https://picsum.photos/seed/pDlBtcXCMY/256/2517",
            discriminator: "<value>",
            publicFlags: 159404,
            flags: 192637,
            globalName: null,
            primaryGuild: {
              identityGuildId: "<value>",
              identityEnabled: false,
              tag: "<value>",
              badge: "<value>",
            },
          },
          teamId: "<value>",
          membershipState: 1,
          role: "admin",
          permissions: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      ],
    },
    eligibleOauth2Scopes: [
      "applications.commands.permissions.update",
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.PrivateApplicationResponse](../../models/components/privateapplicationresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |