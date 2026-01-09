# Avatar Images

This folder contains all pixel art avatar images for the TabKeep profile system.

## Image Requirements

- **Format**: PNG with transparency
- **Size**: 64x64 pixels (or any square size, will be resized automatically)
- **Style**: Pixel art style recommended for consistency
- **Naming**: Use kebab-case (e.g., `cat-orange.png`, `wizard-blue.png`)

## Adding New Avatars

1. Add your PNG image file to this directory
2. Update `/src/lib/pixelAvatars.ts` to include the new avatar:

```typescript
{
  id: 'your-avatar-id',
  name: 'Display Name',
  imageUrl: '/avatars/your-filename.png',
  category: 'animal' // or 'human', 'fantasy', 'robot', 'other'
}
```

## Categories

- **animal**: Cats, dogs, bears, birds, etc.
- **human**: People with different hairstyles and features
- **fantasy**: Wizards, aliens, dragons, unicorns, etc.
- **robot**: Robots, androids, cyborgs
- **other**: Ninjas, pirates, astronauts, professions, etc.

## Image Sources

You can create pixel art avatars using:
- [Piskel](https://www.piskelapp.com/) - Free online pixel art editor
- [Aseprite](https://www.aseprite.org/) - Professional pixel art tool
- [Pixilart](https://www.pixilart.com/) - Online pixel art community
- Or download free pixel art avatar packs from itch.io

## Example Image Names

```
cat-orange.png
dog-brown.png
bunny-white.png
alien-green.png
wizard-blue.png
robot-silver.png
ninja-black.png
astronaut.png
```
