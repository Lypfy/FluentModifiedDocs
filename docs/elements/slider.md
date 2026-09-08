# Slider

The **Slider** element allows users to select a numeric value within a defined range by dragging a slider handle or updating the value programmatically.

---

## Creation

A Slider is created on any **Tab** or **Section** using `:AddSlider(Index, Config)`:

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

## Configuration Reference

Referenced directly from `src/Elements/Slider.lua`:

| Option | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `Index` | `string` | **Yes** | Unique flag identifier used to register the element in `Fluent.Options`. (First argument) |
| `Title` | `string` | **Yes** | Primary title label (`assert` in source). |
| `Default` | `number` | **Yes** | Initial numerical value (`assert` in source). |
| `Min` | `number` | **Yes** | Minimum allowed value (`assert` in source). |
| `Max` | `number` | **Yes** | Maximum allowed value (`assert` in source). |
| `Rounding` | `number` | **Yes** | Decimal precision: `0` for whole integers, `1` for `0.1` steps, `2` for `0.01` steps (`assert` in source). |
| `Description` | `string` | No | Secondary subtext displayed beneath the title. |
| `Callback` | `function(val)` | No | Function invoked with the updated numeric value whenever changed. |

::: warning All Asserted Properties Are Required
`Title`, `Default`, `Min`, `Max`, and `Rounding` are strictly checked in the source code with `assert()`. Omitting any of these will throw a runtime error.
:::

---

## Visuals & Interaction

* **Continuous Dragging**: Supports real-time dragging on both PC (Mouse drag) and Mobile (Touch drag).
* **Live Value Indicator**: Right-aligned `TextLabel` displays the formatted rounded number in real-time.
* **Theming**: Track rail (`SliderRail`), progress fill (`Accent`), and circular knob (`Accent`) all synchronize with the active theme.

---

## Methods & Properties

The slider instance returned by `:AddSlider()` exposes the following:

### Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `Slider.Value` | `number` | The current numerical value of the slider. |
| `Slider.Min` | `number` | The configured minimum value. |
| `Slider.Max` | `number` | The configured maximum value. |
| `Slider.Rounding` | `number` | The configured decimal precision. |
| `Slider.Type` | `string` | Always `"Slider"`. |
| `Slider.Frame` | `Frame` | The root Roblox Frame instance. |

---

### `Slider:SetValue(value)`
Programmatically updates the slider's value. Clamps the input between `Min` and `Max`, rounds to the configured precision, animates the knob/fill bar, and invokes both `Callback` and `OnChanged` listeners:

```lua
Slider:SetValue(64)
```

---

### `Slider:OnChanged(callback)`
Attaches a listener function that executes whenever the slider's value is modified. 

::: tip Immediate Initial Execution
`Slider:OnChanged()` immediately executes the passed callback with the slider's current initial value upon subscription.
:::

```lua
Slider:OnChanged(function(Value)
    print("Slider updated to:", Value)
end)
```

---

### `Slider:SetTitle(titleText)`
Dynamically updates the slider's title label text:

```lua
Slider:SetTitle("Movement Speed (Boosted)")
```

---

### `Slider:SetDesc(descText)`
Dynamically updates the slider's description text:

```lua
Slider:SetDesc("Adjusted for current server conditions")
```

---

### `Slider:Destroy()`
Removes the slider UI element from the container and unregisters it from `Fluent.Options`:

```lua
Slider:Destroy()
```

---

## Global Access via `Fluent.Options`

Every slider created with a unique flag (e.g. `"WalkSpeedSlider"`) is automatically stored in `Fluent.Options`:

```lua
-- Read current value anywhere in your script
local currentSpeed = Fluent.Options.WalkSpeedSlider.Value

-- Programmatically update value anywhere in your script
Fluent.Options.WalkSpeedSlider:SetValue(120)
```

---

## Practical Examples

### 1. Integer Step Slider (Field of View)
```lua
local FOVSlider = Tabs.Visuals:AddSlider("CameraFOV", {
    Title = "Field of View",
    Description = "Change camera zoom and perspective",
    Default = 70,
    Min = 50,
    Max = 120,
    Rounding = 0,
    Callback = function(val)
        workspace.CurrentCamera.FieldOfView = val
    end
})
```

### 2. Float Decimal Slider (Hitbox Multiplier)
```lua
local HitboxSlider = Tabs.Combat:AddSlider("HitboxMultiplier", {
    Title = "Hitbox Multiplier",
    Description = "Expands target bounds (0.1 steps)",
    Default = 1.0,
    Min = 1.0,
    Max = 5.0,
    Rounding = 1,
    Callback = function(val)
        print("Hitbox scale multiplier set to:", val)
    end
})
```
