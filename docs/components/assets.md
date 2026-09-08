# Assets & Icons

FluentPro features built-in support for **8 modern icon libraries** as well as standard **Roblox Asset IDs**. Icons can be specified for Tabs, Sections, Buttons, Notifications, and TitleBar badges.

---

## Supported Icon Packs

| Icon Pack | Prefix Format | Style / Theme | Example |
| :--- | :--- | :--- | :--- |
| **Solar Icons** | `solar/` or `solar:` | Modern, clean, and rounded icons | `"solar/home-2-bold"`, `"solar:shield-bold"` |
| **Gravity UI** | `gravity/` | Sharp, technical, and minimalist UI icons | `"gravity/arrow-right"`, `"gravity/eye"` |
| **Lucide** | `lucide/` | Consistent, lightweight, and versatile | `"lucide/shield"`, `"lucide/swords"` |
| **Craft** | `craft/` | Detailed technical and hardware icons | `"craft/cpu"`, `"craft/terminal"` |
| **Geist** | `geist/` | Vercel's precise developer icon library | `"geist/globe"`, `"geist/triangle"` |
| **SF Symbols** | `sfsymbols/` | Apple system-style iconography | `"sfsymbols/gear"`, `"sfsymbols/bolt"` |
| **Heroicons** | `hero/` | Modern icons designed by Tailwind CSS team | `"hero/bolt"`, `"hero/sparkles"` |
| **Google Material** | `gmi/` | Classic Google Material Design icons | `"gmi/account-circle"`, `"gmi/settings"` |
| **Roblox Asset IDs**| `rbxassetid://` or number | Direct Roblox image and decal assets | `"rbxassetid://7733960981"` |

---

## Icon Implementation Examples

### 1. In Tabs
```lua
local Tabs = {
    Home     = Window:AddTab({ Title = "Dashboard", Icon = "solar/home-2-bold" }),
    Combat   = Window:AddTab({ Title = "Combat",    Icon = "lucide/swords" }),
    Esp      = Window:AddTab({ Title = "Visuals",   Icon = "gravity/eye" }),
    Dev      = Window:AddTab({ Title = "Terminal",  Icon = "geist/terminal" }),
    Hardware = Window:AddTab({ Title = "Hardware",  Icon = "craft/cpu" }),
    Account  = Window:AddTab({ Title = "Account",   Icon = "sfsymbols/person-crop-circle" }),
    Settings = Window:AddTab({ Title = "Settings",  Icon = "hero/cog-6-tooth" }),
    Network  = Window:AddTab({ Title = "Network",   Icon = "gmi/wifi" })
}
```

### 2. In Sections
```lua
local CombatSection = Tabs.Combat:AddSection("Targeting", "lucide/crosshair")
local ServerSection = Tabs.Home:AddSection("Server Info", "gmi/dns")
```

### 3. In TitleBar & Notifications
```lua
-- Window TitleBar Icon
local Window = Fluent:CreateWindow({
    Title = "FluentPro",
    TitleIcon = "solar/shield-bold",
    -- ...
})

-- Notification Icon
Fluent:Notify({
    Title = "Security Alert",
    Content = "Target locked.",
    Icon = "lucide/alert-triangle",
    Duration = 5
})
```

---

## Rich Text Formatting

All element titles and descriptions support standard Roblox Rich Text markup tags:

```lua
Tabs.Main:AddParagraph({
    Title = "<b><font color=\"#38bdf8\">SYSTEM READY</font></b>",
    Content = "Status: <i><font color=\"#22c55e\">Operational</font></i>\nLatency: <b><font color=\"#facc15\">32ms</font></b>"
})
```
