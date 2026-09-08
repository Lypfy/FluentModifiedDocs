# Window

The **Window** is the primary frame container and root controller for the FluentPro UI interface. It hosts all Tabs, Sections, interactive UI Elements, Dialog prompts, and the top TitleBar.

---

## Creating a Window

Initialize a new window instance using `Fluent:CreateWindow(Config)`:

```lua
local Fluent = loadstring(game:HttpGet("https://raw.githubusercontent.com/Lypfy/FluentModified/main/dist/main.lua"))()

local Window = Fluent:CreateWindow({
    Title = "FluentPro",
    SubTitle = "by LarpHub",
    TabWidth = 160,
    Size = UDim2.fromOffset(580, 480),
    Acrylic = true,
    Theme = "Blood Red",
    MinimizeKey = Enum.KeyCode.RightControl,

    -- Global Search Bar
    Search = true,

    -- Version & Tags in TitleBar
    Version = "v1.5.0",
    Tags = {
        { Text = "PRO", Color = Color3.fromRGB(239, 68, 68) },
        { Text = "BETA", Color = Color3.fromRGB(59, 130, 246) }
    },

    -- User Info Banner Card (Sidebar Top)
    UserInfoTop = true,
    UserInfoTitle = "VIP Member",
    UserInfoSubtitle = game:GetService("Players").LocalPlayer.DisplayName,
    UserInfoColor = Color3.fromRGB(239, 68, 68),

    -- TitleBar Icons & Animations
    Animated = true,
    Icons = "rbxassetid://139095000385640",
    TitleIcon = "solar:shield-bold"
})
```

---

## Configuration Reference

Referenced directly from `src/Components/Window.lua` and `src/Components/TitleBar.lua`:

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | `""` | Primary title text displayed on the top left of the TitleBar. |
| `SubTitle` | `string` | `""` | Subtitle description displayed directly under the title. |
| `TabWidth` | `number` | `150` | Width of the left navigation sidebar in pixels. |
| `Size` | `UDim2` | `UDim2.fromOffset(580, 460)` | Initial size dimensions of the window. |
| `Acrylic` | `boolean` | `true` | Enables glass acrylic background blur effect (`AcrylicPaint`). |
| `Theme` | `string` | `"Dark"` | Name of the theme applied on startup. |
| `MinimizeKey` | `Enum.KeyCode` | `Enum.KeyCode.RightControl` | Keyboard keycode used to toggle the window visibility. |
| `Parent` | `Instance` | `CoreGui` / `PlayerGui` | Parent container for the GUI. |
| `Search` | `boolean` | `false` | Enables a global real-time search bar that filters elements across all tabs. |
| `Animated` | `boolean` | `false` | Enables animated accent gradients and border transitions. |
| `Tags` | `table` | `{}` | List of badge pills in the title bar: `{ { Text = "...", Color = Color3 } }`. |
| `Version` | `string` | `nil` | Version badge label rendered next to title bar tags. |
| `UserInfoTop` | `boolean` | `false` | Displays a user profile card at the top of the sidebar. |
| `UserInfoTitle` | `string` | `""` | Main text header for the user profile card. |
| `UserInfoSubtitle` | `string` | `""` | Subtext description (e.g. LocalPlayer display name). |
| `UserInfoColor` | `Color3` | `Accent` | Left accent indicator bar color on the user profile card. |
| `Icons` / `TitleIcon` | `string` | `nil` | Icon displayed in the TitleBar. |

---

## Built-In Interactive Features

### 1. Dragging & Snapping
The window can be moved smoothly across the screen by dragging anywhere on the TitleBar using a mouse or touch screen.
* Dragging while the window is maximized will automatically restore the original window size with relative cursor snapping.

### 2. Live Resizing
At the bottom-right corner of the window, a resize handle (`ResizeStartFrame`) allows interactive scaling:
* **Minimum Size**: `470 x 380` pixels
* **Maximum Size**: `2048 x 2048` pixels

### 3. TitleBar Control Buttons
* **Minimize Button (`MinButton`)**: Toggles window visibility and sends a one-time notification displaying your toggle keybind.
* **Maximize Button (`MaxButton`)**: Animates the window to full viewport dimensions using smooth spring physics (`Flipper.Spring`). Clicking again restores the previous window size.
* **Close Button (`CloseButton`)**: Opens a modal confirmation dialog prompting the user before calling `Window:Destroy()`.

---

## Methods & Functions

### `Window:AddTab(TabConfig)`
Creates and mounts a new tab into the sidebar navigation:

```lua
local Tab = Window:AddTab({
    Title = "Main",
    Icon = "rbxassetid://7733960981" -- or Lucide / Solar icon name
})
```
* Returns a **Tab** instance equipped with `:AddButton()`, `:AddToggle()`, `:AddSlider()`, `:AddSection()`, etc.

---

### `Window:SelectTab(tabIndex)`
Programmatically switches the currently active tab:

```lua
Window:SelectTab(1)
```

---

### `Window:Minimize()`
Toggles the minimized state of the interface. When minimized, `Window.Root.Visible` is set to `false`. On the first minimize, an informative notification popup informs the user of the toggle keybind.

```lua
Window:Minimize()
```

---

### `Window.Maximize(Value, NoPos, Instant)`
Smoothly animates the window to full-screen mode or restores it:

```lua
-- Maximize the window
Window.Maximize(true)

-- Restore to normal size
Window.Maximize(false)
```

---

### `Window:Dialog(Config)`
Displays an interactive modal prompt over the window that blocks interaction with the background until closed:

```lua
Window:Dialog({
    Title = "Unload Script",
    Content = "Are you sure you want to unload the GUI and clean up connections?",
    Buttons = {
        {
            Title = "Confirm",
            Callback = function()
                Window:Destroy()
            end
        },
        {
            Title = "Cancel",
            Callback = function()
                print("Action cancelled")
            end
        }
    }
})
```

---

### `Window:Destroy()`
Completely unloads and cleans up the UI interface:
* Destroys the acrylic blur model.
* Cleans up overlay instances (`_SBOverlays`).
* Removes mobile minimizer floating buttons (`FluentMinimizerGui`) from `CoreGui` and `PlayerGui`.
* Destroys `Window.Root` and all attached signals.

```lua
Window:Destroy()
```

---

## Window Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `Window.Root` | `Frame` | The main Roblox `Frame` holding all window elements. |
| `Window.Minimized` | `boolean` | Whether the window is currently hidden/minimized. |
| `Window.Maximized` | `boolean` | Whether the window is currently maximized to full screen. |
| `Window.Size` | `UDim2` | Current size dimensions of the window. |
| `Window.Position` | `UDim2` | Current offset position of the window. |
| `Window.TabHolder` | `ScrollingFrame` | The scrolling container hosting all Tab buttons. |
| `Window.TitleBar` | `table` | Contains TitleBar components (`Frame`, `MinButton`, `MaxButton`, `CloseButton`). |
| `Window.AcrylicPaint` | `table` | Internal controller managing acrylic blur effect. |

---

## Complete Example

```lua
local Fluent = loadstring(game:HttpGet("https://raw.githubusercontent.com/Lypfy/FluentModified/main/dist/main.lua"))()

local Window = Fluent:CreateWindow({
    Title = "Hub Name",
    SubTitle = "v2.0",
    TabWidth = 160,
    Size = UDim2.fromOffset(580, 460),
    Acrylic = true,
    Theme = "Dark",
    MinimizeKey = Enum.KeyCode.End
})

local MainTab = Window:AddTab({ Title = "General", Icon = "home" })
MainTab:AddParagraph({ Title = "Welcome", Content = "GUI initialized successfully!" })

-- Programmatically select first tab
Window:SelectTab(1)
```
