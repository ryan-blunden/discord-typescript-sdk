# UserNameplateResponse

## Example Usage

```typescript
import { UserNameplateResponse } from "@ryan.blunden/discord-sdk/models/components";

let value: UserNameplateResponse = {
  skuId: "<value>",
  asset: "<value>",
  label: "<value>",
  palette: "black",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `skuId`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | ID of the nameplate SKU                                                    |
| `asset`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | Path to the nameplate asset                                                |
| `label`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The label of this nameplate. Currently unused                              |
| `palette`                                                                  | [components.NameplatePalette](../../models/components/nameplatepalette.md) | :heavy_check_mark:                                                         | N/A                                                                        |