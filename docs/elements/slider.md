# Slider

The **Slider** component allows users to select a numeric value within a defined range by dragging a slider handle or typing directly into the value box.

---

## Creation

A slider is created on a Tab or Section using `:AddSlider("Flag", config)`:

```lua
local Slider = Tabs.Main:AddSlider("WalkSpeedSlider", {
    Title = "WalkSpeed",
    Description = "Adjust your character's movement speed",
    Default = 16,
    Min = 16,
    Max = 250,
    Rounding = 0,
    Callback = function(Value)
        local Character = game.Players.LocalPlayer.Character
        if Character and Character:FindFirstChild("Humanoid") then
            Character.Humanoid.WalkSpeed = Value
        end
    end
})
```

---

## Configuration Options

Referenced directly from `src/Elements/Slider.lua`:

| Option | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | <span class="badge-required">Yes</span> | Primary title displayed on the element (`assert` in source) |
| `Default` | `number` | <span class="badge-required">Yes</span> | Starting value (`assert` in source) |
| `Min` | `number` | <span class="badge-required">Yes</span> | Minimum allowed value (`assert` in source) |
| `Max` | `number` | <span class="badge-required">Yes</span> | Maximum allowed value (`assert` in source) |
| `Rounding` | `number` | <span class="badge-required">Yes</span> | Decimal places precision (e.g. `0` for integers, `1` for `0.1` steps) |
| `Description` | `string` | <span class="badge-optional">No</span> | Secondary subtext displayed beneath the title |
| `Callback` | `function(val)` | <span class="badge-optional">No</span> | Function invoked whenever the slider value updates |

---

## Methods & Properties

The slider instance returned by `:AddSlider()` exposes the following:

### Properties
- `Slider.Value` (`number`): The current numerical value of the slider.
- `Slider.Type` (`"Slider"`): The element type string.
- `Slider.Frame` (`Frame`): The underlying Roblox Frame instance.

### `Slider:SetValue(value)`
Programmatically updates the slider value, clamps it between `Min` and `Max`, rounds it to `Rounding`, and invokes both `Callback` and `OnChanged` listeners:

```lua
Slider:SetValue(50)
```

### `Slider:OnChanged(callback)`
Attaches a listener function to fire whenever the value changes. Immediately fires once with the initial value when attached:

```lua
Slider:OnChanged(function(Value)
    print("New slider value:", Value)
end)
```

### `Slider:SetTitle(titleText)`
Dynamically modifies the title text at runtime:

```lua
Slider:SetTitle("Updated Speed")
```

### `Slider:SetDesc(descText)`
Dynamically modifies the description text at runtime:

```lua
Slider:SetDesc("New speed description")
```

### `Slider:Destroy()`
Removes the slider UI element from the container and unregisters it from `Fluent.Options`:

```lua
Slider:Destroy()
```

---

## Global Options Access

Every slider created with a unique flag (e.g. `"WalkSpeedSlider"`) is registered to `Fluent.Options`:

```lua
-- Read current value from anywhere
local currentSpeed = Fluent.Options.WalkSpeedSlider.Value

-- Set value from anywhere
Fluent.Options.WalkSpeedSlider:SetValue(100)
```
