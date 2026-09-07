# Window

The **Window** is the primary frame container that hosts all your Tabs, Sections, User Cards, and global header controls.

---

## Creating a Window

Initialize a window via `Fluent:CreateWindow({...})`:

```lua
local Fluent = loadstring(game:HttpGet("https://github.com/StyearX/Fluent-modded/releases/download/1.5/main.lua"))()

local Window = Fluent:CreateWindow({
    Title = "GoonWares",
    SubTitle = "Made by: StyearX",
    TabWidth = 160,
    Size = UDim2.fromOffset(580, 480),
    Acrylic = true,
    Theme = "Blood Red",
    MinimizeKey = Enum.KeyCode.RightControl,
    
    -- Global Search
    Search = true,
    
    -- Badges & Version Tags
    Version = "v1.5.0",
    Tags = {
        { Text = "PRO", Color = Color3.fromRGB(239, 68, 68) },
        { Text = "BETA", Color = Color3.fromRGB(59, 130, 246) }
    },
    
    -- User Info Banner
    UserInfoTop = true,
    UserInfoTitle = "Premium User",
    UserInfoSubtitle = game.Players.LocalPlayer.DisplayName,
    UserInfoColor = Color3.fromRGB(239, 68, 68),
    
    -- Animation & Icons
    Animated = true,
    Icons = "rbxassetid://139095000385640",
    TitleIcon = "solar:shield-bold"
})
```

---

## Window Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | `"Fluent"` | Main window header title |
| `SubTitle` | `string` | `""` | Subtitle text displayed alongside title |
| `TabWidth` | `number` | `150` | Width of the left navigation sidebar in pixels |
| `Size` | `UDim2` | `(580, 460)` | Main window dimensions |
| `Acrylic` | `boolean` | `true` | Enables glass acrylic background blur |
| `Theme` | `string` | `"Dark"` | Default theme to load on startup |
| `MinimizeKey` | `Enum.KeyCode` | `RightControl` | Keyboard shortcut to toggle window visibility |
| `Search` | `boolean` | `false` | Enables global search bar across all tabs |
| `Animated` | `boolean` | `false` | Enables animated accent gradients and border shine |
| `Tags` | `table` | `{}` | Array of `{ Text = string, Color = Color3 }` badge pills |
| `Version` | `string` | `nil` | Version badge pill displayed in titlebar |
| `UserInfoTop` | `boolean` | `false` | Renders user profile card at the top of the sidebar |
| `UserInfoTitle` | `string` | `""` | Main text for the user profile card |
| `UserInfoSubtitle`| `string` | `""` | Subtext for the user profile card |
| `UserInfoColor` | `Color3` | Accent | Accent indicator color for user profile card |
| `Icons` / `TitleIcon` | `string` | `nil` | Icon displayed next to window title |

---

## Window Methods

### `Window:SelectTab(tabIndex)`
Switches the active tab by number index:
```lua
Window:SelectTab(1)
```

### `Window:Show()` / `Window:Hide()`
Controls window visibility:
```lua
Window:Hide()
task.wait(2)
Window:Show()
```

### `Window:Dialog({...})`
Opens a modal prompt over the window (see [Dialog Component](/components/dialog)).
