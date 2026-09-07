# Themes & Styling

FluentPro includes over **19+ built-in themes** and full support for custom theme creation with animated stroke shine effects.

---

## Setting a Built-in Theme

```lua
Fluent:SetTheme("Blood Red")
```

### Popular Built-in Themes
- `Dark` / `Darker` / `Light`
- `Aqua` / `Amethyst` / `Rose`
- `Blood Red` / `Emerald` / `Midnight`
- `Cyberpunk` / `Solarized` / `Neon`

---

## Registering a Custom Theme

Use `Fluent:RegisterCustomTheme()` to define your own palette:

```lua
Fluent:RegisterCustomTheme("CyberMatrix", {
    Accent = Color3.fromRGB(0, 255, 128),
    AcrylicMain = Color3.fromRGB(10, 15, 12),
    AcrylicBorder = Color3.fromRGB(20, 45, 30),
    TitleBarLine = Color3.fromRGB(0, 255, 128),
    Tab = Color3.fromRGB(15, 20, 18),
    Element = Color3.fromRGB(14, 22, 18),
    ElementBorder = Color3.fromRGB(25, 50, 35),
    ElementTransparency = 0,
    ToggleSlider = Color3.fromRGB(20, 30, 25),
    ToggleToggled = Color3.fromRGB(0, 255, 128),
    SliderRail = Color3.fromRGB(0, 255, 128),
    Text = Color3.fromRGB(240, 255, 245),
    SubText = Color3.fromRGB(140, 180, 160),
    
    -- Animated Shine Effect
    ShineEnabled = true,
    Shine = {
        Speed = 1.2,
        RotationSpeed = 0.5,
        ColorSequence = ColorSequence.new({
            ColorSequenceKeypoint.new(0, Color3.fromRGB(0, 255, 128)),
            ColorSequenceKeypoint.new(0.5, Color3.fromRGB(0, 150, 255)),
            ColorSequenceKeypoint.new(1, Color3.fromRGB(0, 255, 128)),
        })
    }
})

Fluent:SetTheme("CyberMatrix")
```
