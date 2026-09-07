# Sections

**Sections** are visual group headers that separate related controls into distinct categories within a Tab.

---

## Creating a Section

```lua
local Section = Tabs.Main:AddSection("Movement Settings", "solar:running-2-bold")
```

### Adding Elements to a Section

A Section exposes all the standard element construction methods:

```lua
local Section = Tabs.Main:AddSection("Combat Controls", "solar:swords-bold")

Section:AddToggle("KillAura", {
    Title = "Kill Aura",
    Default = false
})

Section:AddSlider("AttackRange", {
    Title = "Range Radius",
    Min = 5,
    Max = 50,
    Default = 15
})
```

---

## Static vs. Collapsible

- **Standard Section** (`:AddSection()`): Statically visible header that cannot be collapsed.
- **Collapsible Section** (`:AddCollapsibleSection()`): Clickable header that expands and collapses its children. See [Collapsible Section Guide](/elements/collabsiblesection).
