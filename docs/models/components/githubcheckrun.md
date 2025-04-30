# GithubCheckRun

## Example Usage

```typescript
import { GithubCheckRun } from "@ryan.blunden/discord-sdk/models/components";

let value: GithubCheckRun = {
  name: "<value>",
  htmlUrl: "https://internal-futon.org/",
  checkSuite: {
    headSha: "<value>",
    app: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `conclusion`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `htmlUrl`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `checkSuite`                                                                             | [components.GithubCheckSuite](../../models/components/githubchecksuite.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `detailsUrl`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `output`                                                                                 | [components.GithubCheckRunOutput](../../models/components/githubcheckrunoutput.md)       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `pullRequests`                                                                           | [components.GithubCheckPullRequest](../../models/components/githubcheckpullrequest.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |