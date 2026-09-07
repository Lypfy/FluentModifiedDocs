# Toggle & Checkbox

FluentPro provides two styles of binary boolean controls: **Toggle** (switch style) and **Checkbox** (square checkmark style).

---

## 1. Toggle (`:AddToggle`)

Renders a sleek animated iOS/Fluent switch control.

```lua
local Toggle = Tabs.Main:AddToggle("AutoFarmToggle", {
    Title = "Auto Farm Mobs",
    Description = "Automatically attacks the nearest enemy in range",
    Default = false,
    Callback = function(State)
        _G.AutoFarm = State
        print("AutoFarm is now:", State and "ON" or "OFF")
    end
})
```

---

## 2. Checkbox (`:AddCheckbox`)

Renders a modern rounded checkbox with checkmark animations.

```lua
local Checkbox = Tabs.Main:AddCheckbox("EspBox", {
    Title = "ESP Boxes",
    Description = "Draw bounding boxes around targets",
    Default = true,
    Callback = function(State)
        print("ESP Box toggled:", State)
    end
})
```

---

## Configuration Reference

Referenced directly from `src/Elements/Toggle.lua` and `src/Elements/Checkbox.lua`:

| Property | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `Title` | `string` | <span class="badge-required">Yes</span> | — | Element header title (`assert` in source) |
| `Description` | `string` | <span class="badge-optional">No</span> | `nil` | Subtitle description text |
| `Default` | `boolean` | <span class="badge-optional">No</span> | `false` | Initial boolean state |
| `Callback` | `function(state)`| <span class="badge-optional">No</span> | `nil` | Fired when value changes |

---

## Methods & Properties

Both Toggle and Checkbox instances return identical APIs:

### Properties
- `Element.Value` (`boolean`): The current boolean state.
- `Element.Type` (`"Toggle"` \| `"Checkbox"`): The element type.
- `Element.Frame` (`Frame`): The underlying Roblox Frame.

### `Element:SetValue(boolean)`
Programmatically updates the switch state and executes callbacks:

```lua
Toggle:SetValue(true)
```

### `Element:OnChanged(callback)`
Registers a listener that triggers on any state change. Immediately fires once with current state:

```lua
Toggle:OnChanged(function(State)
    print("State changed:", State)
end)
```

### `Element:SetTitle(text)` / `Element:SetDesc(text)`
Dynamically modifies the title or description text at runtime:

```lua
Toggle:SetTitle("Updated Name")
Toggle:SetDesc("Updated Description")
```

### `Element:Destroy()`
Removes the element from UI and unregisters it from `Fluent.Options`.

---

## Global Access via `Fluent.Options`

```lua
-- Read current boolean
local isFarming = Fluent.Options.AutoFarmToggle.Value

-- Set value
Fluent.Options.AutoFarmToggle:SetValue(false)
```
