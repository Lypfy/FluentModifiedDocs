# Themes & Styling

FluentPro includes over **19+ built-in themes**, support for custom color palettes with animated shine effects, and native integration with **8 modern icon libraries**.

---

## Setting a Theme

You can switch the active theme dynamically at any time using `Fluent:SetTheme(themeName)`:

```lua
Fluent:SetTheme("Blood Red")
```

### Built-in Themes (19+)

FluentPro provides a curated selection of vibrant, dark-mode, and minimalist themes:

* **Dark & Modern**: `Dark`, `Darker`, `Charcoal`, `AMOLED`, `Ash Gray`
* **Vibrant & Neon**: `Blood Red`, `Neon Cyber`, `Neon Purple`, `Deep Ocean`, `Midnight Blue`, `Royal Blue`
* **Aesthetic & Pastel**: `Deep Violet`, `Rose`, `Cotton Candy`, `Lavender Pink`, `Arctic Frost`, `Cyanic`
* **Glow & Special**: `Amber Glow`, `Bloomings`, `Crimson`, `Gold`, `Pearl White`, `RGB`

---

## Supported Icon Packs & Glyphs

FluentPro supports **8 distinct icon libraries** out of the box. Simply prefix the icon name when creating **Tabs**, **Sections**, **Buttons**, or configuring the **TitleBar**:

| Icon Pack | Prefix | Description | Example Usage |
| :--- | :--- | :--- | :--- |
| **Solar Icons** | `solar/` or `solar:` | Modern, clean, and rounded icons. | `"solar/home-2-bold"` |
| **Gravity UI** | `gravity/` | Sharp and minimalist UI icons. | `"gravity/arrow-right"` |
| **Lucide** | `lucide/` | Beautiful, consistent, and extensive icon set. | `"lucide/shield"`, `"lucide/swords"` |
| **Craft** | `craft/` | Detailed technical and hardware icons. | `"craft/cpu"`, `"craft/terminal"` |
| **Geist** | `geist/` | Vercel's ultra-precise developer icon library. | `"geist/globe"`, `"geist/triangle"` |
| **SF Symbols** | `sfsymbols/` | Apple system-style iconography. | `"sfsymbols/gear"`, `"sfsymbols/bolt"` |
| **Heroicons** | `hero/` | Hand-crafted icons designed by Tailwind CSS creators. | `"hero/bolt"`, `"hero/sparkles"` |
| **Google Material** | `gmi/` | Classic Google Material Design icons. | `"gmi/account-circle"`, `"gmi/settings"` |
| **Roblox Assets** | `rbxassetid://` | Custom Roblox decals or texture asset IDs. | `"rbxassetid://7733960981"` |

### Icon Usage in Tabs & Sections

```lua
local Tabs = {
    -- Solar Icons
    Dashboard = Window:AddTab({ Title = "Dashboard", Icon = "solar/home-2-bold" }),

    -- Lucide Icons
    Combat    = Window:AddTab({ Title = "Combat", Icon = "lucide/swords" }),

    -- Gravity UI
    Visuals   = Window:AddTab({ Title = "Visuals", Icon = "gravity/eye" }),

    -- Geist Icons
    Developer = Window:AddTab({ Title = "Developer", Icon = "geist/terminal" }),

    -- Heroicons
    Settings  = Window:AddTab({ Title = "Settings", Icon = "hero/cog-6-tooth" }),

    -- SF Symbols
    Profile   = Window:AddTab({ Title = "Account", Icon = "sfsymbols/person-crop-circle" }),

    -- Google Material Icons
    Network   = Window:AddTab({ Title = "Network", Icon = "gmi/wifi" }),

    -- Craft Icons
    System    = Window:AddTab({ Title = "System", Icon = "craft/cpu" }),

    -- Roblox Asset ID
    Custom    = Window:AddTab({ Title = "Custom", Icon = "rbxassetid://7733960981" })
}
```

---

## Registering a Custom Theme

Use `Fluent:RegisterCustomTheme(name, palette)` to build your own custom color scheme:

```lua
Fluent:RegisterCustomTheme("CyberMatrix", {
    Accent = Color3.fromRGB(0, 255, 128),
    AcrylicMain = Color3.fromRGB(10, 15, 12),
    AcrylicBorder = Color3.fromRGB(20, 45, 30),
    TitleBarLine = Color3.fromRGB(0, 255, 128),
    Tab = Color3.fromRGB(15, 20, 18),
    Element = Color3.fromRGB(14, 22, 18),
    ElementBorder = Color3.fromRGB(25, 50, 35),
    InElementBorder = Color3.fromRGB(30, 60, 40),
    ElementTransparency = 0,
    ToggleSlider = Color3.fromRGB(20, 30, 25),
    ToggleToggled = Color3.fromRGB(0, 255, 128),
    SliderRail = Color3.fromRGB(0, 255, 128),
    CheckboxUnchecked = Color3.fromRGB(20, 30, 25),
    CheckboxChecked = Color3.fromRGB(0, 255, 128),
    CheckboxCheck = Color3.fromRGB(10, 15, 12),
    Text = Color3.fromRGB(240, 255, 245),
    SubText = Color3.fromRGB(140, 180, 160),
    
    -- Animated Border Shine Effect
    ShineEnabled = true,
    Shine = {
        Speed = 1.2,
        RotationSpeed = 0.5,
        ColorSequence = ColorSequence.new({
            ColorSequenceKeypoint.new(0, Color3.fromRGB(0, 255, 128)),
            ColorSequenceKeypoint.new(0.5, Color3.fromRGB(0, 150, 255)),
            ColorSequenceKeypoint.new(1, Color3.fromRGB(0, 255, 128)),
        })
    }
})

Fluent:SetTheme("CyberMatrix")
```

---

## Color Token Reference

| Token Key | Type | Description |
| :--- | :--- | :--- |
| `Accent` | `Color3` | Primary highlight color used for active tabs, sliders, toggles, and accents. |
| `AcrylicMain` | `Color3` | Background color for the acrylic glass backdrop. |
| `AcrylicBorder` | `Color3` | Outer border stroke color of the main window. |
| `TitleBarLine` | `Color3` | Separator line color beneath the TitleBar. |
| `Tab` | `Color3` | Background color of inactive/active tab buttons. |
| `Element` | `Color3` | Background color of element rows (Buttons, Sliders, Toggles, etc.). |
| `ElementBorder` | `Color3` | Outer border stroke color for elements. |
| `InElementBorder`| `Color3` | Inner border stroke color for elements. |
| `ToggleSlider` | `Color3` | Color of toggle tracks and unactive slider rails. |
| `ToggleToggled` | `Color3` | Color of toggle knob when activated. |
| `SliderRail` | `Color3` | Background rail color of sliders. |
| `CheckboxUnchecked`| `Color3`| Background color for unchecked checkboxes. |
| `CheckboxChecked` | `Color3`| Background color for checked checkboxes. |
| `CheckboxCheck` | `Color3` | Checkmark icon color. |
| `Text` | `Color3` | Primary title and text color. |
| `SubText` | `Color3` | Subtitle, description, and secondary text color. |

---

## Typography & Rich Text

All text fields across all elements (Titles, Descriptions, Paragraph contents) support standard Roblox Rich Text markup:

```lua
Tab:AddParagraph({
    Title = "<b><font color=\"#38bdf8\">System Status</font></b>",
    Content = "Current Mode: <i><font color=\"#4ade80\">Optimal</font></i>\nVersion: <b>v2.1.0</b>"
})
```
