# Dropdown

The **Dropdown** element provides single-select or multi-select menus with rich visual customization, built-in search filtering, animated border effects, and external side-panel expansion modes.

---

## Basic Usage

Created on a Tab or Section with `:AddDropdown("Flag", config)`:

```lua
local Dropdown = Tabs.Main:AddDropdown("LocationDropdown", {
    Title = "Teleport Destination",
    Description = "Select an area to teleport to",
    Values = { "Spawn Area", "Shop", "Desert Zone", "Boss Arena" },
    Default = "Spawn Area",
    Multi = false,
    Callback = function(Selected)
        print("Selected destination:", Selected)
    end
})
```

---

## Multi-Select Dropdown

Set `Multi = true` to allow users to select multiple options simultaneously. In multi-select mode, `Default` and `Value` use a key-boolean dictionary table:

```lua
local MultiDropdown = Tabs.Main:AddDropdown("TargetFilter", {
    Title = "ESP Target Filters",
    Description = "Select all entity types to highlight",
    Values = { "Players", "NPCs", "Items", "Chests" },
    Default = {
        ["Players"] = true,
        ["Chests"] = true
    },
    Multi = true,
    Callback = function(SelectedTable)
        for Item, State in pairs(SelectedTable) do
            print(Item, State and "Enabled" or "Disabled")
        end
    end
})
```

---

## Advanced Options

Referenced directly from `src/Elements/Dropdown.lua`:

```lua
local AdvancedDropdown = Tabs.Main:AddDropdown("CustomThemeMode", {
    Title = "Advanced Menu",
    Description = "Opens on side panel with custom animated styling",
    Values = { "Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6" },
    Default = "Option 1",
    
    -- Special Props in source code
    Search = true,                         -- Enables search filter box inside the dropdown list (default is true)
    Animated = true,                       -- Adds animated gradient accent borders
    DropdownOutsideWindow = true,          -- Opens menu outside the window as a flyout panel
    DropdownBackgroundTransparency = 0.15, -- Custom panel transparency
    DropdownBackgroundImages = "rbxassetid://139095000385640", -- Custom panel texture
    
    Callback = function(Value)
        print("Selected:", Value)
    end
})
```

::: tip Side-Panel Auto-Splitting
When two dropdowns both have `DropdownOutsideWindow = true` and are opened concurrently, FluentPro automatically splits them to opposite sides (one on the left, one on the right) so they never overlap!
:::

---

## Configuration Reference

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | — | Label displayed above the dropdown |
| `Description` | `string` | `nil` | Small explanatory text under the title |
| `Values` | `table` | `{}` | Array of selectable string options |
| `Default` | `string` \| `table` | `nil` | Default selected value or table of keys when `Multi = true` |
| `Multi` | `boolean` | `false` | Enables multiple selection checkboxes |
| `Search` / `NoSearch` | `boolean` | `true` | When `false` or `NoSearch = true`, disables the internal search box |
| `Animated` | `boolean` | `false` | Enables animated border/gradient effect |
| `DropdownOutsideWindow` | `boolean` | `false` | Pops out dropdown as external side-panel |
| `DropdownBackgroundTransparency`| `number` | `0` | Alpha transparency of the dropdown container |
| `DropdownBackgroundImages` | `string` | `nil` | Custom background texture asset ID |
| `Callback` | `function` | `nil` | Triggered when selections are changed |

---

## Methods & Properties

### Properties
- `Dropdown.Value` (`string` \| `table`): The current selected item (or table of selected items when `Multi = true`).
- `Dropdown.Values` (`table`): The current array of choices.
- `Dropdown.Opened` (`boolean`): Whether the dropdown menu is currently opened.
- `Dropdown.Frame` (`Frame`): The underlying Roblox Frame instance.

### `Dropdown:SetValue(value)`
Sets the selected value(s) dynamically:

```lua
-- Single select
Dropdown:SetValue("Shop")

-- Multi select
MultiDropdown:SetValue({
    ["Players"] = true,
    ["Items"] = true
})
```

### `Dropdown:SetValues(valuesTable)`
Replaces the entire list of available options and rebuilds the choices:

```lua
Dropdown:SetValues({ "New City", "Harbor", "Dungeon" })
```

### `Dropdown:OnChanged(callback)`
Registers a listener callback for selection changes.

### `Dropdown:SetTitle(titleText)`
Updates the title label text.

### `Dropdown:SetDesc(descText)`
Updates the description label text.

### `Dropdown:Destroy()`
Removes the element and cleans up its listeners and `Fluent.Options` registration.

---

## Global Options Access

```lua
-- Access via registered flag
local selected = Fluent.Options.LocationDropdown.Value
```
