# Button

The **Button** element provides an interactive clickable row with hover feedback, title/description typography, an action icon indicator, and safe callback execution.

---

## Creation

A Button can be added directly to any **Tab** or **Section** using `:AddButton(Config)`:

```lua
local Button = Tabs.Main:AddButton({
    Title = "Teleport to Spawn",
    Description = "Instantly moves your character back to the starting point",
    Callback = function()
        local Character = game.Players.LocalPlayer.Character
        if Character and Character:FindFirstChild("HumanoidRootPart") then
            Character.HumanoidRootPart.CFrame = CFrame.new(0, 50, 0)
        end

        Fluent:Notify({
            Title = "Teleport",
            Content = "Teleported to Spawn successfully!",
            Duration = 3
        })
    end
})
```

---

## Configuration Reference

Referenced directly from `src/Elements/Button.lua` and `src/Components/Element.lua`:

| Property | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `Title` | `string` | **Yes** | — | Primary button label text (`assert` in source). |
| `Description` | `string` | No | `nil` | Secondary subtext beneath the title. Expands element height when provided. |
| `Callback` | `function()` | No | `function() end` | Function executed safely via `SafeCallback` whenever the button is clicked. |

---

## Visual Behavior & Structure

* **Default Height**: `38px` when only `Title` is present; dynamically expands to `52px` when a non-empty `Description` is specified.
* **Chevron Icon**: Includes a right-aligned indicator icon (`rbxassetid://10709791437`) that automatically adapts to the current theme's `Text` color.
* **Theming**: Automatically bound to theme tokens (`Element` background and `InElementBorder` stroke).
* **Click Area**: The entire card area is interactive and triggers the callback when clicked or tapped.

---

## Methods & Properties

The button instance returned by `:AddButton()` exposes the following:

### Properties

| Property | Type | Description |
| :--- | :--- | :--- |
| `Button.Frame` | `TextButton` | The root interactive Roblox `TextButton` instance. |
| `Button.Title` | `TextLabel` | The `TextLabel` displaying the primary title. |
| `Button.DescLabel` | `TextLabel` | The `TextLabel` displaying the subtitle description. |
| `Button.Border` | `UIStroke` | The `UIStroke` instance applied around the element. |

---

### `Button:SetTitle(newTitle)`
Dynamically updates the button's title text at runtime:

```lua
Button:SetTitle("New Action Title")
```

---

### `Button:SetDesc(newDesc)`
Dynamically updates or hides the description text at runtime. Automatically updates label visibility:

```lua
Button:SetDesc("Updated action description")
```

---

### `Button:Destroy()`
Removes the button from the container and cleans up its UI instance:

```lua
Button:Destroy()
```

---

## Advanced Examples

### Dynamic Status Button
Update the button text dynamically after performing an asynchronous operation:

```lua
local DownloadBtn = Tabs.Main:AddButton({
    Title = "Download Assets",
    Description = "Click to fetch remote data",
    Callback = function()
        DownloadBtn:SetTitle("Downloading...")
        DownloadBtn:SetDesc("Please wait while resources are loaded")

        task.wait(2)

        DownloadBtn:SetTitle("Download Complete")
        DownloadBtn:SetDesc("All resources have been loaded")
    end
})
```

### Dialog Confirmation Trigger
Pair a button with a Window dialog for destructive or critical actions:

```lua
Tabs.Settings:AddButton({
    Title = "Reset All Settings",
    Description = "Restore all configurations to their default state",
    Callback = function()
        Window:Dialog({
            Title = "Confirm Reset",
            Content = "Are you sure you want to reset all stored configs?",
            Buttons = {
                {
                    Title = "Yes, Reset",
                    Callback = function()
                        -- Reset logic here
                        Fluent:Notify({
                            Title = "Settings",
                            Content = "All configurations have been reset.",
                            Duration = 4
                        })
                    end
                },
                {
                    Title = "Cancel"
                }
            }
        })
    end
})
```
