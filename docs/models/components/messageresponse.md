# MessageResponse

## Example Usage

```typescript
import { MessageResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: MessageResponse = {
  content: "<value>",
  mentions: [
    {
      id: "<value>",
      username: "Doyle.Hackett43",
      discriminator: "<value>",
      publicFlags: 703648,
      flags: 220178,
    },
  ],
  mentionRoles: [
    "<value>",
  ],
  attachments: [
    {
      id: "<value>",
      filename: "example.file",
      size: 81431,
      url: "https://basic-requirement.org",
      proxyUrl: "https://noted-icebreaker.net/",
    },
  ],
  embeds: [
    {
      type: "<value>",
    },
  ],
  timestamp: new Date("2023-11-15T08:01:05.090Z"),
  flags: 278273,
  components: [
    {
      id: 482868,
    },
  ],
  id: "<value>",
  channelId: "<value>",
  author: {
    id: "<value>",
    username: "Skylar_Cassin3",
    discriminator: "<value>",
    publicFlags: 966221,
    flags: 386967,
  },
  pinned: false,
  mentionEveryone: false,
  tts: false,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `content`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `mentions`                                                                                                       | [components.UserResponse](../../models/components/userresponse.md)[]                                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `mentionRoles`                                                                                                   | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `attachments`                                                                                                    | [components.MessageAttachmentResponse](../../models/components/messageattachmentresponse.md)[]                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `embeds`                                                                                                         | [components.MessageEmbedResponse](../../models/components/messageembedresponse.md)[]                             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `timestamp`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `editedTimestamp`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `flags`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `components`                                                                                                     | *components.MessageResponseComponents*[]                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `resolved`                                                                                                       | [components.ResolvedObjectsResponse](../../models/components/resolvedobjectsresponse.md)                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `stickers`                                                                                                       | *components.Stickers*[]                                                                                          | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `stickerItems`                                                                                                   | [components.MessageStickerItemResponse](../../models/components/messagestickeritemresponse.md)[]                 | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `channelId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `author`                                                                                                         | [components.UserResponse](../../models/components/userresponse.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `pinned`                                                                                                         | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `mentionEveryone`                                                                                                | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `tts`                                                                                                            | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `call`                                                                                                           | [components.MessageCallResponse](../../models/components/messagecallresponse.md)                                 | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `activity`                                                                                                       | [components.MessageActivityResponse](../../models/components/messageactivityresponse.md)                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `application`                                                                                                    | [components.BasicApplicationResponse](../../models/components/basicapplicationresponse.md)                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `applicationId`                                                                                                  | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `interaction`                                                                                                    | [components.MessageInteractionResponse](../../models/components/messageinteractionresponse.md)                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `nonce`                                                                                                          | *components.Nonce*                                                                                               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `webhookId`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `messageReference`                                                                                               | [components.MessageReferenceResponse](../../models/components/messagereferenceresponse.md)                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `thread`                                                                                                         | [components.ThreadResponse](../../models/components/threadresponse.md)                                           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `mentionChannels`                                                                                                | [components.MessageMentionChannelResponse](../../models/components/messagementionchannelresponse.md)[]           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `roleSubscriptionData`                                                                                           | [components.MessageRoleSubscriptionDataResponse](../../models/components/messagerolesubscriptiondataresponse.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `purchaseNotification`                                                                                           | [components.PurchaseNotificationResponse](../../models/components/purchasenotificationresponse.md)               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `position`                                                                                                       | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `poll`                                                                                                           | [components.PollResponse](../../models/components/pollresponse.md)                                               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `interactionMetadata`                                                                                            | *components.InteractionMetadata*                                                                                 | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `messageSnapshots`                                                                                               | [components.MessageSnapshotResponse](../../models/components/messagesnapshotresponse.md)[]                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `reactions`                                                                                                      | [components.MessageReactionResponse](../../models/components/messagereactionresponse.md)[]                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `referencedMessage`                                                                                              | [components.BasicMessageResponse](../../models/components/basicmessageresponse.md)                               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |