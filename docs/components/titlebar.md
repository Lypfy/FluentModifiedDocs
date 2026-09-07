# TitleBar & UserInfo

FluentPro features an enhanced TitleBar layout with custom badges, version pills, search integration, and customizable User Information cards.

---

## User Info Card

Displays a profile card at the top of the sidebar navigation with the player's username, rank, and custom accent styling.

```lua
local Window = Fluent:CreateWindow({
    Title = "Script Hub",
    UserInfoTop = true,
    UserInfoTitle = "VIP Member",
    UserInfoSubtitle = game.Players.LocalPlayer.DisplayName,
    UserInfoColor = Color3.fromRGB(250, 204, 21), -- Gold accent
})
```

---

## Tags & Version Badges

You can render customized badge pills directly in the top titlebar:

```lua
local Window = Fluent:CreateWindow({
    Title = "FluentPro",
    Version = "v1.5.2",
    Tags = {
        { Text = "PRO", Color = Color3.fromRGB(239, 68, 68) },
        { Text = "UNDETECTED", Color = Color3.fromRGB(34, 197, 94) }
    }
})
```

---

## Global Search

Enable the global search bar across all tabs:

```lua
local Window = Fluent:CreateWindow({
    Title = "FluentPro",
    Search = true -- Adds real-time filter bar in titlebar
})
```
