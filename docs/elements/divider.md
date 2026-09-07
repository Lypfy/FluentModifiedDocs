# Divider & Space

Use **Dividers** and **Spaces** to control visual separation and layout pacing between components.

---

## Divider

A divider renders a subtle, clean separator line between elements with no extra setup required:

```lua
Tabs.Main:AddDivider()
```

### Example Usage

```lua
Tabs.Main:AddToggle("FeatureA", { Title = "Auto Farm" })
Tabs.Main:AddToggle("FeatureB", { Title = "Auto Collect" })

-- Visual separation
Tabs.Main:AddDivider()

Tabs.Main:AddButton({ Title = "Clear Inventory" })
```

---

## Space

A space creates an invisible vertical padding of custom pixel height:

```lua
Tabs.Main:AddSpace({
    Height = 15 -- Height in pixels
})
```

### Options

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Height` | `number` | `10` | Vertical gap height in pixels |
