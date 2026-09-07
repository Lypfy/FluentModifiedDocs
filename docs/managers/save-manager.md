# Save Manager

The **SaveManager** handles profile saving, configuration auto-loading, and UI state serialization across game sessions.

---

## Setup

```lua
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/StyearX/Fluent-modded/main/Addons/SaveManager.lua"))()

SaveManager:SetLibrary(Fluent)
SaveManager:IgnoreThemeSettings()
SaveManager:SetIgnoreIndexes({ "WalkSpeedSlider" }) -- Flags to exclude
SaveManager:SetFolder("MyScriptHub/Configs")

-- Automatically generates configuration UI in the provided tab
SaveManager:BuildConfigSection(Tabs.Settings)

-- Auto load active profile on boot
SaveManager:LoadAutoloadConfig()
```

---

## API Methods

### `SaveManager:SetLibrary(FluentLibrary)`
Links the manager to your Fluent library instance.

### `SaveManager:SetFolder(folderPath)`
Directory path on disk where configuration files are saved.

### `SaveManager:IgnoreThemeSettings()`
Prevents active theme options from overwriting user theme settings during profile load.

### `SaveManager:BuildConfigSection(tab)`
Appends full config management controls (Save, Load, Overwrite, Autoload, Refresh) to the given Tab.
