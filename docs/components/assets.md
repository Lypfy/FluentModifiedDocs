# Assets & Icons

FluentPro natively supports multiple icon formats including standard **Roblox Asset IDs**, **Solar Icons**, and **Lucide Icons**.

---

## Icon Types

### 1. Solar Icons
FluentPro has built-in integration with Solar Icons using the `solar:` prefix:

```lua
Tabs.Main = Window:AddTab({ Title = "Dashboard", Icon = "solar:home-2-bold" })
Tabs.Combat = Window:AddTab({ Title = "Combat", Icon = "solar:swords-bold" })
Tabs.Settings = Window:AddTab({ Title = "Settings", Icon = "solar:settings-bold" })
```

### 2. Lucide Icons
Use the `lucide/` prefix for Lucide icons:

```lua
Tabs.Shield = Window:AddTab({ Title = "Defense", Icon = "lucide/shield" })
```

### 3. Roblox Asset IDs
Use raw `rbxassetid://` or numeric asset identifiers:

```lua
Tabs.Custom = Window:AddTab({ Title = "Custom", Icon = "rbxassetid://7733960981" })
```

---

## Rich Text Support

All titles and descriptions across all components support Roblox Rich Text formatting out of the box:

```lua
sec:AddParagraph({
    Title = "<b><font color=\"#f87171\">CRITICAL</font></b> Alert",
    Content = "Current status is <i>online</i>."
})
```
