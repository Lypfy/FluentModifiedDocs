# Notification

**Notifications** pop up on screen with auto-dismiss timers, status icon badges, and rich styling.

---

## Basic Notification

```lua
Fluent:Notify({
    Title = "Script Loaded",
    Content = "FluentPro v1.5 initialized successfully.",
    Duration = 5
})
```

---

## Notification Types & Icons

```lua
-- Success notification
Fluent:Notify({
    Title = "Configuration Saved",
    Content = "Profile 'AutoRaid' saved to workspace.",
    SubContent = "File: /Configs/AutoRaid.json",
    Type = "Success",
    Duration = 6
})

-- Warning notification
Fluent:Notify({
    Title = "High Latency",
    Content = "Server ping is above 350ms.",
    Type = "Warning",
    Duration = 4
})

-- Error notification
Fluent:Notify({
    Title = "Execution Failed",
    Content = "Failed to locate target HumanoidRootPart.",
    Type = "Error",
    Duration = 5
})
```

---

## Configuration Reference

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Title` | `string` | `"Notification"` | Header title |
| `Content` | `string` | `""` | Primary body message |
| `SubContent`| `string` | `nil` | Secondary line displayed in subtle text |
| `Type` | `string` | `"Info"` | Type indicator: `"Info"`, `"Success"`, `"Warning"`, or `"Error"` |
| `Icon` | `string` | `nil` | Custom icon override |
| `Duration` | `number` | `5` | Lifespan in seconds before sliding out |
