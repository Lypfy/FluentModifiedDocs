# Window Setup

Learn how to configure dimensions, responsive mobile scaling, minimize keys, and custom headers.

---

## Responsive Scaling for Mobile & PC

You can detect mobile devices with `UserInputService` to automatically scale the window size and tab sidebar width:

```lua
local UserInputService = game:GetService("UserInputService")
local isMobile = UserInputService.TouchEnabled and not UserInputService.MouseEnabled and not UserInputService.KeyboardEnabled

local Window = Fluent:CreateWindow({
    Title = "Mobile & PC Hub",
    SubTitle = "Auto Responsive",
    TabWidth = isMobile and 130 or 160,
    Size = isMobile and UDim2.fromOffset(480, 490) or UDim2.fromOffset(580, 520),
    Acrylic = not isMobile, -- Disable acrylic blur on lower end mobile devices
    Theme = "Darker",
    MinimizeKey = Enum.KeyCode.RightControl
})
```

---

## Global Error Handler

You can capture unhandled component runtime errors:

```lua
Fluent:SetErrorHandler(function(errorMessage, fullError)
    warn("[Fluent Error Captured]:", errorMessage)
end)
```
