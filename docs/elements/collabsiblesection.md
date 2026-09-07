# Collapsible Section

**Collapsible Sections** allow you to group multiple UI elements under an expandable header. Users can click the section header to expand or collapse the container, helping keep tabs tidy and organized.

---

## Creation

Created on any Tab using `:AddCollapsibleSection()`:

```lua
local Section = Tabs.Main:AddCollapsibleSection("Movement Modifiers", "solar:walking-bold", true)
```

### Arguments

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | — | Section title text |
| `Icon` | `string` | `nil` | Icon placed to the left of the header |
| `Open` | `boolean` | `true` | `false` starts the section collapsed |

---

## Adding Elements Inside Sections

A collapsible section exposes all element builder methods (`:AddButton()`, `:AddToggle()`, `:AddSlider()`, `:AddDropdown()`, etc.):

```lua
local MovementSection = Tabs.Main:AddCollapsibleSection("Character Settings", "solar:user-bold", true)

-- Add elements inside the section
MovementSection:AddSlider("WalkSpeed", {
    Title = "Speed Multiplier",
    Min = 16,
    Max = 200,
    Default = 16,
    Callback = function(v) end
})

MovementSection:AddToggle("InfiniteJump", {
    Title = "Infinite Jump",
    Default = false,
    Callback = function(v) end
})

MovementSection:AddButton({
    Title = "Reset to Default",
    Callback = function()
        Fluent:Notify({ Title = "Reset", Content = "Speeds reverted." })
    end
})
```

---

## Standard Section vs. Collapsible Section

If you do not need collapsible functionality, you can use a fixed header via `:AddSection()`:

```lua
-- Standard static header
local StaticSection = Tabs.Main:AddSection("Static Group Header", "solar:widget-bold")
```
