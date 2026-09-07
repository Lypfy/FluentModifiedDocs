# Tabs

**Tabs** divide your interface into organized category pages inside the sidebar navigation.

---

## Creating Tabs

Add tabs to your window via `Window:AddTab()`:

```lua
local Tabs = {
    Main = Window:AddTab({ Title = "Main", Icon = "solar:home-2-bold" }),
    Combat = Window:AddTab({ Title = "Combat", Icon = "solar:swords-bold" }),
    Visuals = Window:AddTab({ Title = "Visuals", Icon = "solar:eye-bold" }),
    Settings = Window:AddTab({ Title = "Settings", Icon = "solar:settings-bold" })
}
```

---

## Tab Options

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | <span class="badge-required">Yes</span> | Tab name shown in the sidebar |
| `Icon` | `string` | <span class="badge-optional">No</span> | Icon asset ID or Solar/Lucide name (e.g. `solar:home-2-bold`) |

---

## Direct Element Placement

You can place elements directly on the Tab without wrapping them inside a section:

```lua
Tabs.Main:AddParagraph({
    Title = "Welcome!",
    Content = "Select an option from the elements below."
})

Tabs.Main:AddToggle("FarmToggle", {
    Title = "Auto Collect Gems"
})

Tabs.Main:AddDivider()

Tabs.Main:AddSlider("SpeedSlider", {
    Title = "Player Speed",
    Min = 16,
    Max = 100,
    Default = 16
})
```
