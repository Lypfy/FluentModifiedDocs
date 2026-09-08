# Toggle

The **Toggle** element provides an animated, iOS / Fluent-style pill switch control for managing binary on/off boolean settings.

---

## Creation

A Toggle is created on any **Tab** or **Section** using `:AddToggle(Index, Config)`:

```lua
local Toggle = Tabs.Main:AddToggle("AutoFarmToggle", {
    Title = "Auto Farm",
    Description = "Automatically attacks targets within range",
    Default = false,
    Callback = function(State)
        _G.AutoFarmEnabled = State
        print("Auto Farm is now:", State and "ENABLED" or "DISABLED")
    end
})
```

---

## Configuration Reference

Referenced directly from `src/Elements/Toggle.lua`:

| Property | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `Index` | `string` | **Yes** | — | Unique flag identifier used to register the element in `Fluent.Options`. (First argument) |
| `Title` | `string` | **Yes** | — | Primary toggle label text (`assert` in source). |
| `Description` | `string` | No | `nil` | Subtitle description displayed under the title. |
| `Default` | `boolean` | No | `false` | Initial boolean state when loaded. |
| `Callback` | `function(state)` | No | `function() end` | Function executed safely via `SafeCallback` whenever the state is toggled. |

---

## Visuals & Animation

* **Pill Track & Sliding Knob**: Smooth `TweenService` animation (0.25s `Quint` easing) sliding the knob between OFF (`X = 2px`) and ON (`X = 19px`).
* **Dynamic Theme Highlighting**: When toggled ON, the background fills with the active theme's `Accent` color and the knob illuminates with `ToggleToggled`.
* **Full-Row Click Target**: Clicking anywhere on the toggle row switches the state.

---

## Methods & Properties

The toggle instance returned by `:AddToggle()` exposes the following:

### Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `Toggle.Value` | `boolean` | The current boolean state (`true` or `false`). |
| `Toggle.Type` | `string` | Always `"Toggle"`. |
| `Toggle.Frame` | `TextButton` | The underlying interactive Roblox `TextButton` instance. |

---

### `Toggle:SetValue(boolean)`
Programmatically updates the toggle state, animates the pill switch, and invokes both `Callback` and `OnChanged` listeners:

```lua
Toggle:SetValue(true)
```

---

### `Toggle:OnChanged(callback)`
Attaches a listener function that executes whenever the toggle state changes.

::: tip Immediate Initial Execution
`Toggle:OnChanged()` immediately executes the passed callback with the current initial boolean state upon registration.
:::

```lua
Toggle:OnChanged(function(State)
    print("Toggle state changed to:", State)
end)
```

---

### `Toggle:SetTitle(titleText)`
Dynamically updates the toggle's title text at runtime:

```lua
Toggle:SetTitle("Auto Farm (Aggressive Mode)")
```

---

### `Toggle:SetDesc(descText)`
Dynamically updates the toggle's description subtext:

```lua
Toggle:SetDesc("Updated target scanning radius to 100 studs")
```

---

### `Toggle:Destroy()`
Removes the toggle UI element and unregisters it from `Fluent.Options`:

```lua
Toggle:Destroy()
```

---

## Global Access via `Fluent.Options`

Every toggle created with a unique flag (e.g. `"AutoFarmToggle"`) can be read or modified globally from `Fluent.Options`:

```lua
-- Check the toggle state from any loop or function
if Fluent.Options.AutoFarmToggle.Value then
    -- Run farming logic
end

-- Programmatically switch toggle state
Fluent.Options.AutoFarmToggle:SetValue(false)
```

---

## Practical Example

```lua
local KillAuraToggle = Tabs.Combat:AddToggle("KillAura", {
    Title = "Kill Aura",
    Description = "Automatically hit enemies in a 15 stud radius",
    Default = false,
    Callback = function(Value)
        if Value then
            task.spawn(function()
                while Fluent.Options.KillAura.Value do
                    -- Combat iteration routine
                    task.wait(0.2)
                end
            end)
        end
    end
})

-- Listen for changes
KillAuraToggle:OnChanged(function(State)
    Fluent:Notify({
        Title = "Kill Aura",
        Content = State and "Aura activated!" or "Aura deactivated.",
        Duration = 2
    })
end)
```
