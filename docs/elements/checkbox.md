# Checkbox

The **Checkbox** element provides a modern, rounded square checkbox with checkmark animations for managing binary on/off settings.

::: tip Toggle vs Checkbox
FluentPro offers two styles for boolean settings:
- **[Toggle](/elements/toggle)**: Pill-style sliding switch (recommended for feature toggles).
- **[Checkbox](/elements/checkbox)**: Rounded square box with a checkmark icon.
:::

---

## Creation

A Checkbox is created on any **Tab** or **Section** using `:AddCheckbox(Index, Config)`:

```lua
local Checkbox = Tabs.Main:AddCheckbox("EspBox", {
    Title = "ESP Boxes",
    Description = "Draw bounding boxes around targets",
    Default = true,
    Callback = function(State)
        print("ESP Boxes:", State and "ENABLED" or "DISABLED")
    end
})
```

---

## Configuration Reference

Referenced directly from `src/Elements/Checkbox.lua`:

| Property | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `Index` | `string` | **Yes** | — | Unique flag identifier used to register the element in `Fluent.Options`. (First argument) |
| `Title` | `string` | **Yes** | — | Primary header label (`assert` in source). |
| `Description` | `string` | No | `nil` | Secondary description displayed below the title. |
| `Default` | `boolean` | No | `false` | Initial checked state. |
| `Callback` | `function(state)` | No | `function() end` | Function executed safely via `SafeCallback` whenever toggled. |

---

## Methods & Properties

The checkbox instance returned by `:AddCheckbox()` exposes the following:

### Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `Checkbox.Value` | `boolean` | The current boolean state (`true` or `false`). |
| `Checkbox.Type` | `string` | Always `"Checkbox"`. |
| `Checkbox.Frame` | `TextButton` | The underlying interactive Roblox `TextButton` instance. |

---

### `Checkbox:SetValue(boolean)`
Programmatically updates the checkbox state, updates theme fill and checkmark icon transparency, and invokes both `Callback` and `OnChanged` listeners:

```lua
Checkbox:SetValue(false)
```

---

### `Checkbox:OnChanged(callback)`
Registers a listener that triggers on any state change. Immediately executes once with the initial state upon binding:

```lua
Checkbox:OnChanged(function(State)
    print("Checkbox state changed:", State)
end)
```

---

### `Checkbox:SetTitle(text)` / `Checkbox:SetDesc(text)`
Dynamically modifies the title or description text at runtime:

```lua
Checkbox:SetTitle("Updated Name")
Checkbox:SetDesc("Updated Description")
```

---

### `Checkbox:Destroy()`
Removes the checkbox from the UI container and unregisters it from `Fluent.Options`:

```lua
Checkbox:Destroy()
```

---

## Global Access via `Fluent.Options`

```lua
-- Read current boolean
local isEnabled = Fluent.Options.EspBox.Value

-- Programmatically set state
Fluent.Options.EspBox:SetValue(true)
```
