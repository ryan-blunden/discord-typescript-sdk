# TeamMemberRoles

Admins have similar access as owners, except they cannot take destructive actions on the team or team-owned apps.

## Example Usage

```typescript
import { TeamMemberRoles } from "@ryan.blunden/discord-sdk/models/components";

let value: TeamMemberRoles = "developer";
```

## Values

```typescript
"admin" | "developer" | "read_only"
```