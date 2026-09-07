# Dialog

**Dialogs** are modal prompt overlays that request confirmation, alert the user, or collect input before proceeding.

---

## Simple Confirmation Dialog

```lua
Window:Dialog({
    Title = "Reset All Settings",
    Content = "Are you sure you want to revert all configurations back to their defaults?",
    Buttons = {
        {
            Title = "Confirm",
            Callback = function()
                print("Settings reset confirmed!")
            end
        },
        {
            Title = "Cancel" -- Omitted callback automatically closes dialog
        }
    }
})
```

---

## Dialog with Input Field

You can attach a text input field to a dialog by including the `Input` table:

```lua
Window:Dialog({
    Title = "Enter License Key",
    Content = "Please input your product key to unlock premium features:",
    Input = {
        Placeholder = "XXXX-XXXX-XXXX-XXXX"
    },
    Buttons = {
        {
            Title = "Validate",
            Callback = function(InputValue)
                if InputValue == "SECRET123" then
                    Fluent:Notify({ Title = "Success", Content = "License activated!" })
                else
                    Fluent:Notify({ Title = "Error", Content = "Invalid key!" })
                end
            end
        },
        {
            Title = "Cancel"
        }
    }
})
```

---

## Configuration Reference

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | `"Dialog"` | Header title of the modal |
| `Content` | `string` | `""` | Message body explaining the prompt |
| `Input` | `table` | `nil` | `{ Placeholder = "..." }` creates a text field |
| `Buttons` | `table` | `{}` | List of `{ Title = "...", Callback = function }` |
