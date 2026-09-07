# Getting Started

Welcome to the **FluentPro** documentation. FluentPro is a modern, responsive, and customizable UI library designed for Roblox scripts.

---

## 📦 Loading FluentPro

To load FluentPro into your script, use `game:HttpGet` and `loadstring`:

```lua
local Fluent = loadstring(game:HttpGet("https://github.com/StyearX/Fluent-modded/releases/download/1.5/main.lua"))()
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/StyearX/Fluent-modded/main/Addons/SaveManager.lua"))()
local InterfaceManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/StyearX/Fluent-modded/main/Addons/InterfaceManager.lua"))()
```

---

## 🚀 Quick Start Example

Here is a full working example demonstrating a window, tabs, toggles, sliders, and notification alerts:

```lua
local Fluent = loadstring(game:HttpGet("https://github.com/StyearX/Fluent-modded/releases/download/1.5/main.lua"))()
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/StyearX/Fluent-modded/main/Addons/SaveManager.lua"))()
local InterfaceManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/StyearX/Fluent-modded/main/Addons/InterfaceManager.lua"))()

-- 1. Create Window
local Window = Fluent:CreateWindow({
    Title = "FluentPro Hub",
    SubTitle = "v1.5",
    TabWidth = 160,
    Size = UDim2.fromOffset(580, 460),
    Acrylic = true,
    Theme = "Dark",
    MinimizeKey = Enum.KeyCode.RightControl
})

-- 2. Add Tabs
local Tabs = {
    Main = Window:AddTab({ Title = "Main", Icon = "solar:home-2-bold" }),
    Settings = Window:AddTab({ Title = "Settings", Icon = "solar:settings-bold" })
}

-- 3. Add Controls
Tabs.Main:AddParagraph({
    Title = "Welcome to FluentPro",
    Content = "All controls feature animated transitions and full state persistence."
})

Tabs.Main:AddToggle("AutoFarm", {
    Title = "Auto Farm Mobs",
    Default = false,
    Callback = function(Value)
        print("AutoFarm state:", Value)
    end
})

Tabs.Main:AddSlider("WalkSpeed", {
    Title = "Character WalkSpeed",
    Default = 16,
    Min = 16,
    Max = 120,
    Rounding = 0,
    Callback = function(Value)
        if game.Players.LocalPlayer.Character and game.Players.LocalPlayer.Character:FindFirstChild("Humanoid") then
            game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = Value
        end
    end
})

-- 4. Setup Managers
SaveManager:SetLibrary(Fluent)
InterfaceManager:SetLibrary(Fluent)

SaveManager:IgnoreThemeSettings()
SaveManager:SetIgnoreIndexes({})
SaveManager:SetFolder("FluentHubConfigs")
InterfaceManager:SetFolder("FluentHubConfigs")

InterfaceManager:BuildInterfaceSection(Tabs.Settings)
SaveManager:BuildConfigSection(Tabs.Settings)

Window:SelectTab(1)

Fluent:Notify({
    Title = "FluentPro",
    Content = "The script loaded successfully!",
    Duration = 5
})

SaveManager:LoadAutoloadConfig()
```
