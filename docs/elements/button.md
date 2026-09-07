# Button

The **Button** component provides an interactive clickable element with hover feedback and safe execution callbacks.

---

## Usage

Created on any Tab or Section using `:AddButton({...})`:

```lua
local Button = Tabs.Main:AddButton({
    Title = "Execute Action",
    Description = "Click to execute the main script routine",
    Callback = function()
        print("Button was clicked!")
        Fluent:Notify({
            Title = "Success",
            Content = "Action executed successfully!",
            Duration = 5
        })
    end
})
```

---

## Configuration Reference

Referenced directly from `src/Elements/Button.lua`:

| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | <span class="badge-required">Yes</span> | Primary button label (`assert` in source) |
| `Description` | `string` | <span class="badge-optional">No</span> | Secondary subtext beneath the title |
| `Callback` | `function` | <span class="badge-optional">No</span> | Function safely executed when clicked |

---

## Methods & Properties

### `Button:SetTitle(newTitle)`
Dynamically updates the button title text:

```lua
Button:SetTitle("New Action Name")
```

### `Button:SetDesc(newDesc)`
Dynamically updates the button description text:

```lua
Button:SetDesc("Updated description text")
```
