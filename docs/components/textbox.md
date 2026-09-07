# Input & Textbox

The **Input** component provides an interactive single-line text input field with placeholder text and submit triggers.

---

## Usage

```lua
local Input = Tabs.Main:AddInput("CustomWebhook", {
    Title = "Discord Webhook URL",
    Description = "Enter your webhook to receive loot notifications",
    Placeholder = "https://discord.com/api/webhooks/...",
    Default = "",
    Numeric = false,
    Finished = true,
    Callback = function(Value)
        print("Webhook submitted:", Value)
    end
})
```

---

## Configuration Reference

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | — | Label above the input |
| `Description` | `string` | `nil` | Sub-label text |
| `Placeholder` | `string` | `""` | Placeholder text when empty |
| `Default` | `string` | `""` | Initial pre-filled text |
| `Numeric` | `boolean` | `false` | Only allows numeric digits |
| `Finished` | `boolean` | `true` | Fires callback only when user presses Enter / unfocuses |
| `Callback` | `function(v)` | `nil` | Callback receiving the entered string |

---

## Methods

### `Input:SetValue(text)`
Programmatically set the textbox text:
```lua
Input:SetValue("https://discord.com/api/webhooks/12345/...")
```

### `Input:OnChanged(callback)`
Attaches a live listener whenever characters are typed:
```lua
Input:OnChanged(function(Value)
    print("Typing:", Value)
end)
```
