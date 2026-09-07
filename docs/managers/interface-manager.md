# Interface Manager

The **InterfaceManager** provides automatic controls for theme switching, acrylic blur toggles, UI scale adjustments, and custom font registration.

---

## Setup

```lua
local InterfaceManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/StyearX/Fluent-modded/main/Addons/InterfaceManager.lua"))()

InterfaceManager:SetLibrary(Fluent)
InterfaceManager:SetFolder("MyScriptHub/Interface")

-- Creates Theme selector, Acrylic toggle, and Animated UI options
InterfaceManager:BuildInterfaceSection(Tabs.Settings)

-- Restores user's chosen theme and visual options
InterfaceManager:LoadSettings()
```

---

## Custom Font Integration

You can apply custom fonts across the entire library at runtime:

```lua
InterfaceManager:ApplyCustomFont("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Medium)
```
