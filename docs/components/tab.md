# Tabs

**Tabs** divide your interface into organized category pages inside the left navigation sidebar. Each tab provides an isolated, auto-scrolling container for UI elements and sections with smooth slide and fade page transitions.

---

## Creating Tabs

Add tabs to your window using `Window:AddTab({ Title = "...", Icon = "..." })`:

```lua
local Tabs = {
    Main     = Window:AddTab({ Title = "Main",     Icon = "solar/home-2-bold" }),
    Combat   = Window:AddTab({ Title = "Combat",   Icon = "lucide/swords" }),
    Visuals  = Window:AddTab({ Title = "Visuals",  Icon = "gravity/eye" }),
    Settings = Window:AddTab({ Title = "Settings", Icon = "hero/cog-6-tooth" })
}
```

---

## Configuration Reference

Referenced directly from `src/Components/Tab.lua`:

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | **Yes** | Tab name displayed in the sidebar and top header bar. Supports Rich Text. |
| `Icon` | `string` | No | Icon key or Roblox Asset ID (e.g. `solar/home-2-bold`, `lucide/shield`, `rbxassetid://...`). |

---

## Tab Navigation & Animations

* **Active Accent Indicator**: A smooth spring-loaded pill bar on the left border dynamically glides and stretches to the active tab position using `Flipper.Spring`.
* **Smooth Page Transitions**: When switching tabs, the content area performs a micro-slide ($90\text{px} \rightarrow 110\text{px} \rightarrow 90\text{px}$) and opacity fade ($1 \rightarrow 0$) animation.
* **Smart Media Handling**: Inactive tabs automatically silence background media (sets `VideoFrame.Volume = 0` on unselected tabs).
* **Hover State Motors**: Button background transparencies transition via spring physics on `MouseEnter`, `MouseLeave`, `MouseDown`, and `MouseUp`.

---

## Adding Sections to Tabs

Organize related elements inside a tab using header sections:

### Standard Section (`:AddSection`)
```lua
local PlayerSection = Tabs.Main:AddSection("Player Settings", "solar/user-bold")

PlayerSection:AddToggle("GodMode", {
    Title = "God Mode",
    Default = false
})

PlayerSection:AddSlider("Speed", {
    Title = "WalkSpeed",
    Min = 16,
    Max = 200,
    Default = 16,
    Rounding = 0
})
```

### Collapsible Section (`:AddCollapsibleSection`)
```lua
local TeleportSection = Tabs.Main:AddCollapsibleSection("Waypoints & Teleports", "solar/map-point-bold", false)

TeleportSection:AddButton({
    Title = "Teleport to Safezone",
    Callback = function()
        -- Teleport logic
    end
})
```

---

## Direct Element Placement

Elements do not require a section wrapper and can be attached directly to the tab instance. Elements mounted directly on a Tab follow standard insertion order:

```lua
-- Welcome Banner
Tabs.Main:AddParagraph({
    Title = "Welcome to FluentPro",
    Content = "Select an action below or browse the sidebar tabs."
})

-- Direct Interactive Elements
Tabs.Main:AddButton({
    Title = "Instant Heal",
    Callback = function()
        print("Healed!")
    end
})

Tabs.Main:AddToggle("AutoCollect", {
    Title = "Auto Collect Items",
    Default = true
})

Tabs.Main:AddDivider()

Tabs.Main:AddSlider("JumpPower", {
    Title = "Jump Power",
    Min = 50,
    Max = 300,
    Default = 50,
    Rounding = 0
})
```

---

## Supported Tab Elements

Because Tab inherits `lib.Elements`, all UI components can be called directly on any Tab object:

| Method | Description |
| :--- | :--- |
| `Tab:AddButton({...})` | Clickable card row with icon and callback. |
| `Tab:AddToggle(flag, {...})` | Pill-style animated toggle switch. |
| `Tab:AddCheckbox(flag, {...})` | Square checkmark selection box. |
| `Tab:AddSlider(flag, {...})` | Numeric slider with drag track and live value label. |
| `Tab:AddDropdown(flag, {...})` | Single or multi-select dropdown menu. |
| `Tab:AddColorpicker(flag, {...})` | Full RGB / HSV color picker with preview swatch. |
| `Tab:AddKeybind(flag, {...})` | Interactive keybind listener. |
| `Tab:AddInput(flag, {...})` | Text input box with submit callback. |
| `Tab:AddParagraph({...})` | Multi-line title & description text block. |
| `Tab:AddDivider()` | Thin visual horizontal separation line. |
| `Tab:AddSpace(height)` | Vertical blank spacing gap. |
| `Tab:AddAudio(flag, {...})` | Sound effect player element. |
| `Tab:AddVideo(flag, {...})` | Video player element. |
| `Tab:AddCode(flag, {...})` | Monospace syntax code preview container. |
| `Tab:AddProgressBar(flag, {...})` | Animated progress bar with percentage tracking. |

---

## Methods & Properties

### Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `Tab.Name` | `string` | The title string assigned to the tab. |
| `Tab.Selected` | `boolean` | `true` if the tab is currently active and visible. |
| `Tab.Type` | `string` | Always `"Tab"`. |
| `Tab.Frame` | `TextButton` | The sidebar button Roblox instance. |
| `Tab.ContainerFrame` | `ScrollingFrame` | The main scrolling frame containing the tab's UI elements. |
| `Tab.Container` | `ScrollingFrame` | Alias for `Tab.ContainerFrame`. |
| `Tab.ScrollFrame` | `ScrollingFrame` | Alias for `Tab.ContainerFrame`. |

---

### Switching Tabs Programmatically

Use `Window:SelectTab(index)` to navigate between tabs via script logic:

```lua
-- Select the first tab (e.g. Main)
Window:SelectTab(1)

-- Select the third tab (e.g. Visuals)
Window:SelectTab(3)
```

---

## Complete Multi-Tab Example

```lua
local Fluent = loadstring(game:HttpGet("https://raw.githubusercontent.com/Lypfy/FluentModified/main/dist/main.lua"))()

local Window = Fluent:CreateWindow({
    Title = "Game Hub",
    SubTitle = "v1.0",
    TabWidth = 160,
    Size = UDim2.fromOffset(580, 460),
    Acrylic = true,
    Theme = "Blood Red",
    MinimizeKey = Enum.KeyCode.RightControl
})

local Tabs = {
    Home    = Window:AddTab({ Title = "Home",    Icon = "solar/home-2-bold" }),
    Combat  = Window:AddTab({ Title = "Combat",  Icon = "lucide/swords" }),
    Misc    = Window:AddTab({ Title = "Misc",    Icon = "hero/cube-transparent" })
}

-- Home Tab Content
Tabs.Home:AddParagraph({
    Title = "Dashboard",
    Content = "Welcome to the game script! Toggle features from the Combat tab."
})

-- Combat Tab Content
local CombatSec = Tabs.Combat:AddSection("Targeting")
CombatSec:AddToggle("Aimbot", { Title = "Silent Aim", Default = false })
CombatSec:AddSlider("FOV", { Title = "FOV Radius", Min = 30, Max = 180, Default = 90, Rounding = 0 })

-- Misc Tab Content
Tabs.Misc:AddButton({
    Title = "Rejoin Server",
    Callback = function()
        game:GetService("TeleportService"):Teleport(game.PlaceId, game.Players.LocalPlayer)
    end
})

-- Set Initial Active Tab
Window:SelectTab(1)
```
