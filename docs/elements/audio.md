# Audio Player

The **Audio** component embeds an interactive audio card directly into your UI with track metadata, playback buttons (Play, Pause, Stop), and runtime sound switching.

---

## Usage

Created on any Tab or Section using `:AddAudio({...})`:

```lua
local AudioPlayer = Tabs.Main:AddAudio({
    Audio = "rbxassetid://1843584852", -- or numeric ID e.g. "1843584852"
    AudioTitle = "Cyberpunk Phonk Beat",
    Volume = 0.5,
    Looped = true,
    AutoPlay = false
})
```

---

## Configuration Reference

Referenced directly from `src/Elements/Audio.lua`:

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `Audio` / `Sound` | `string` | `""` | Sound asset ID (e.g. `rbxassetid://...` or `"1843584852"`) |
| `AudioTitle` / `Title` | `string` | `"Audio"` | Title label displayed on the player |
| `Volume` | `number` | `1` | Playback volume scaling between `0.0` and `1.0` |
| `Looped` | `boolean` | `false` | Loops audio back to start when finished |
| `AutoPlay` | `boolean` | `false` | Automatically starts playback when rendered |

---

## Methods & Properties

### Properties
- `Audio.Sound` (`Sound`): The underlying Roblox `Sound` instance.
- `Audio.Frame` (`Frame`): The container Frame instance.
- `Audio.Type` (`"Audio"`): The element type.

### `Audio:SetAudio(newAssetId)`
Dynamically replaces the playing audio track:

```lua
AudioPlayer:SetAudio("rbxassetid://9043887091")
```

### `Audio:Destroy()`
Stops playback, destroys the `Sound` instance, and removes the UI card:

```lua
AudioPlayer:Destroy()
```
