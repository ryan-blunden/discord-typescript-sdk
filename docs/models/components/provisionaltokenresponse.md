# ProvisionalTokenResponse

## Example Usage

```typescript
import { ProvisionalTokenResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: ProvisionalTokenResponse = {
  tokenType: "<value>",
  accessToken: "<value>",
  expiresIn: 959783,
  scope: "<value>",
  idToken: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `tokenType`        | *string*           | :heavy_check_mark: | N/A                |
| `accessToken`      | *string*           | :heavy_check_mark: | N/A                |
| `expiresIn`        | *number*           | :heavy_check_mark: | N/A                |
| `scope`            | *string*           | :heavy_check_mark: | N/A                |
| `idToken`          | *string*           | :heavy_check_mark: | N/A                |
| `refreshToken`     | *string*           | :heavy_minus_sign: | N/A                |
| `scopes`           | *string*[]         | :heavy_minus_sign: | N/A                |
| `expiresAtS`       | *number*           | :heavy_minus_sign: | N/A                |