// Pixel Art Avatar Library - Real Image Files
// All avatars are stored in /public/avatars/

export interface PixelAvatar {
  id: string;
  name: string;
  imageUrl: string;
  category: 'animal' | 'fantasy' | 'icon' | 'potion' | 'other';
}

// Avatar library - all using actual image files from public/avatars/
export const pixelAvatars: PixelAvatar[] = [
  // Animals
  { id: 'pixel-cat', name: 'Pixel Cat', imageUrl: '/avatars/pixel-cat.png', category: 'animal' },
  { id: 'pixel-dog-cool', name: 'Cool Dog', imageUrl: '/avatars/pixel-dog-cool.png', category: 'animal' },
  { id: 'pixel-frog', name: 'Pixel Frog', imageUrl: '/avatars/pixel-frog.png', category: 'animal' },
  { id: 'pixel-squirrel', name: 'Pixel Squirrel', imageUrl: '/avatars/pixel-squirrel.png', category: 'animal' },

  // Fantasy & Characters
  { id: 'pixel-ghost', name: 'Pixel Ghost', imageUrl: '/avatars/pixel-ghost.png', category: 'fantasy' },
  { id: 'pixel-unicorn', name: 'Pixel Unicorn', imageUrl: '/avatars/pixel-unicorn.png', category: 'fantasy' },
  { id: 'pixel-skull-beige', name: 'Beige Skull', imageUrl: '/avatars/pixel-skull-beige.png', category: 'fantasy' },
  { id: 'pixel-skull-dark', name: 'Dark Skull', imageUrl: '/avatars/pixel-skull-dark.png', category: 'fantasy' },
  { id: 'pixel-smiley-neon', name: 'Neon Smiley', imageUrl: '/avatars/pixel-smiley-neon.png', category: 'fantasy' },
  { id: 'pixel-eyes', name: 'Pixel Eyes', imageUrl: '/avatars/pixel-eyes.png', category: 'fantasy' },

  // Potions & Magic
  { id: 'pixel-potion-green', name: 'Green Potion', imageUrl: '/avatars/pixel-potion-green.png', category: 'potion' },
  { id: 'pixel-potion-pink', name: 'Pink Potion', imageUrl: '/avatars/pixel-potion-pink.png', category: 'potion' },
  { id: 'pixel-potion-purple', name: 'Purple Potion', imageUrl: '/avatars/pixel-potion-purple.png', category: 'potion' },

  // Icons & Symbols
  { id: 'pixel-heart', name: 'Pixel Heart', imageUrl: '/avatars/pixel-heart.png', category: 'icon' },
  { id: 'pixel-star', name: 'Pixel Star', imageUrl: '/avatars/pixel-star.png', category: 'icon' },
  { id: 'pixel-icon-star', name: 'Star Icon', imageUrl: '/avatars/pixel-icon-star.png', category: 'icon' },
  { id: 'pixel-shield', name: 'Pixel Shield', imageUrl: '/avatars/pixel-shield.png', category: 'icon' },
  { id: 'pixel-trophy', name: 'Pixel Trophy', imageUrl: '/avatars/pixel-trophy.png', category: 'icon' },
  { id: 'pixel-bone', name: 'Pixel Bone', imageUrl: '/avatars/pixel-bone.png', category: 'icon' },
  { id: 'pixel-question', name: 'Question Mark', imageUrl: '/avatars/pixel-question.png', category: 'icon' },
  { id: 'pixel-icon-close', name: 'Close Icon', imageUrl: '/avatars/pixel-icon-close.png', category: 'icon' },
  { id: 'pixel-icon-x', name: 'X Icon', imageUrl: '/avatars/pixel-icon-x.png', category: 'icon' },

  // Other
  { id: 'pixel-egg', name: 'Pixel Egg', imageUrl: '/avatars/pixel-egg.png', category: 'other' },
  { id: 'pixel-hourglass', name: 'Hourglass', imageUrl: '/avatars/pixel-hourglass.png', category: 'other' },
  { id: 'pixel-speech-bubble', name: 'Speech Bubble', imageUrl: '/avatars/pixel-speech-bubble.png', category: 'other' },
];

// Helper function to get avatar by ID
export const getAvatarById = (id: string): PixelAvatar | undefined => {
  return pixelAvatars.find(avatar => avatar.id === id);
};

// Helper function to get avatar by category
export const getAvatarsByCategory = (category: PixelAvatar['category']): PixelAvatar[] => {
  return pixelAvatars.filter(avatar => avatar.category === category);
};

// Helper function to get random avatar
export const getRandomAvatar = (): PixelAvatar => {
  const randomIndex = Math.floor(Math.random() * pixelAvatars.length);
  return pixelAvatars[randomIndex];
};

// Helper function to convert avatar to data URL (for extension sync)
export const getAvatarDataUrl = async (avatarId: string): Promise<string | null> => {
  const avatar = getAvatarById(avatarId);
  if (!avatar) return null;

  // For now, return the image URL directly
  // In production, you might want to fetch and convert to data URL
  return avatar.imageUrl;
};
