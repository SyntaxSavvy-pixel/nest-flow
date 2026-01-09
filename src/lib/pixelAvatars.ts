// Pixel Art Avatar Library - Real Image Files
// All avatars are stored in /public/avatars/

export interface PixelAvatar {
  id: string;
  name: string;
  imageUrl: string;
  category: 'animal' | 'human' | 'fantasy' | 'robot' | 'other';
}

// Avatar library - all using actual image files from public/avatars/
export const pixelAvatars: PixelAvatar[] = [
  // Animals
  { id: 'cat-orange', name: 'Orange Cat', imageUrl: '/avatars/cat-orange.png', category: 'animal' },
  { id: 'cat-black', name: 'Black Cat', imageUrl: '/avatars/cat-black.png', category: 'animal' },
  { id: 'cat-white', name: 'White Cat', imageUrl: '/avatars/cat-white.png', category: 'animal' },
  { id: 'dog-brown', name: 'Brown Dog', imageUrl: '/avatars/dog-brown.png', category: 'animal' },
  { id: 'dog-golden', name: 'Golden Dog', imageUrl: '/avatars/dog-golden.png', category: 'animal' },
  { id: 'bunny-white', name: 'White Bunny', imageUrl: '/avatars/bunny-white.png', category: 'animal' },
  { id: 'bunny-pink', name: 'Pink Bunny', imageUrl: '/avatars/bunny-pink.png', category: 'animal' },
  { id: 'bear-brown', name: 'Brown Bear', imageUrl: '/avatars/bear-brown.png', category: 'animal' },
  { id: 'bear-panda', name: 'Panda Bear', imageUrl: '/avatars/bear-panda.png', category: 'animal' },
  { id: 'fox-orange', name: 'Orange Fox', imageUrl: '/avatars/fox-orange.png', category: 'animal' },
  { id: 'owl-brown', name: 'Brown Owl', imageUrl: '/avatars/owl-brown.png', category: 'animal' },
  { id: 'penguin', name: 'Penguin', imageUrl: '/avatars/penguin.png', category: 'animal' },
  { id: 'monkey', name: 'Monkey', imageUrl: '/avatars/monkey.png', category: 'animal' },
  { id: 'koala', name: 'Koala', imageUrl: '/avatars/koala.png', category: 'animal' },
  { id: 'tiger', name: 'Tiger', imageUrl: '/avatars/tiger.png', category: 'animal' },

  // Humans
  { id: 'boy-blonde', name: 'Blonde Boy', imageUrl: '/avatars/boy-blonde.png', category: 'human' },
  { id: 'boy-brown', name: 'Brown Hair Boy', imageUrl: '/avatars/boy-brown.png', category: 'human' },
  { id: 'boy-black', name: 'Black Hair Boy', imageUrl: '/avatars/boy-black.png', category: 'human' },
  { id: 'girl-blonde', name: 'Blonde Girl', imageUrl: '/avatars/girl-blonde.png', category: 'human' },
  { id: 'girl-brown', name: 'Brown Hair Girl', imageUrl: '/avatars/girl-brown.png', category: 'human' },
  { id: 'girl-black', name: 'Black Hair Girl', imageUrl: '/avatars/girl-black.png', category: 'human' },
  { id: 'girl-pink', name: 'Pink Hair Girl', imageUrl: '/avatars/girl-pink.png', category: 'human' },
  { id: 'man-beard', name: 'Bearded Man', imageUrl: '/avatars/man-beard.png', category: 'human' },
  { id: 'woman-redhead', name: 'Red Hair Woman', imageUrl: '/avatars/woman-redhead.png', category: 'human' },
  { id: 'person-glasses', name: 'Person with Glasses', imageUrl: '/avatars/person-glasses.png', category: 'human' },

  // Fantasy
  { id: 'alien-green', name: 'Green Alien', imageUrl: '/avatars/alien-green.png', category: 'fantasy' },
  { id: 'alien-blue', name: 'Blue Alien', imageUrl: '/avatars/alien-blue.png', category: 'fantasy' },
  { id: 'alien-purple', name: 'Purple Alien', imageUrl: '/avatars/alien-purple.png', category: 'fantasy' },
  { id: 'wizard-blue', name: 'Blue Wizard', imageUrl: '/avatars/wizard-blue.png', category: 'fantasy' },
  { id: 'wizard-purple', name: 'Purple Wizard', imageUrl: '/avatars/wizard-purple.png', category: 'fantasy' },
  { id: 'dragon-red', name: 'Red Dragon', imageUrl: '/avatars/dragon-red.png', category: 'fantasy' },
  { id: 'dragon-green', name: 'Green Dragon', imageUrl: '/avatars/dragon-green.png', category: 'fantasy' },
  { id: 'unicorn-white', name: 'White Unicorn', imageUrl: '/avatars/unicorn-white.png', category: 'fantasy' },
  { id: 'unicorn-rainbow', name: 'Rainbow Unicorn', imageUrl: '/avatars/unicorn-rainbow.png', category: 'fantasy' },
  { id: 'fairy-pink', name: 'Pink Fairy', imageUrl: '/avatars/fairy-pink.png', category: 'fantasy' },
  { id: 'elf-green', name: 'Green Elf', imageUrl: '/avatars/elf-green.png', category: 'fantasy' },
  { id: 'vampire', name: 'Vampire', imageUrl: '/avatars/vampire.png', category: 'fantasy' },
  { id: 'ghost-white', name: 'White Ghost', imageUrl: '/avatars/ghost-white.png', category: 'fantasy' },
  { id: 'zombie', name: 'Zombie', imageUrl: '/avatars/zombie.png', category: 'fantasy' },

  // Robots
  { id: 'robot-silver', name: 'Silver Robot', imageUrl: '/avatars/robot-silver.png', category: 'robot' },
  { id: 'robot-blue', name: 'Blue Robot', imageUrl: '/avatars/robot-blue.png', category: 'robot' },
  { id: 'robot-red', name: 'Red Robot', imageUrl: '/avatars/robot-red.png', category: 'robot' },
  { id: 'robot-green', name: 'Green Robot', imageUrl: '/avatars/robot-green.png', category: 'robot' },
  { id: 'android', name: 'Android', imageUrl: '/avatars/android.png', category: 'robot' },
  { id: 'cyborg', name: 'Cyborg', imageUrl: '/avatars/cyborg.png', category: 'robot' },

  // Other
  { id: 'ninja-black', name: 'Black Ninja', imageUrl: '/avatars/ninja-black.png', category: 'other' },
  { id: 'ninja-red', name: 'Red Ninja', imageUrl: '/avatars/ninja-red.png', category: 'other' },
  { id: 'pirate', name: 'Pirate', imageUrl: '/avatars/pirate.png', category: 'other' },
  { id: 'astronaut', name: 'Astronaut', imageUrl: '/avatars/astronaut.png', category: 'other' },
  { id: 'superhero-red', name: 'Red Superhero', imageUrl: '/avatars/superhero-red.png', category: 'other' },
  { id: 'superhero-blue', name: 'Blue Superhero', imageUrl: '/avatars/superhero-blue.png', category: 'other' },
  { id: 'detective', name: 'Detective', imageUrl: '/avatars/detective.png', category: 'other' },
  { id: 'chef', name: 'Chef', imageUrl: '/avatars/chef.png', category: 'other' },
  { id: 'artist', name: 'Artist', imageUrl: '/avatars/artist.png', category: 'other' },
  { id: 'musician', name: 'Musician', imageUrl: '/avatars/musician.png', category: 'other' },
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
