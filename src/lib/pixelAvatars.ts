// Pixel Art Avatar Library - NFT Style
// This generates unique pixel art avatars dynamically

export interface PixelAvatar {
  id: string;
  svg: string;
  colors: string[];
}

// Color palettes for different avatar styles
const colorPalettes = {
  skin: ['#FFD1B3', '#F4C2A0', '#E8B796', '#D9A889', '#C89A7C', '#8B6F47'],
  hair: ['#1A1A1A', '#3D2817', '#654321', '#8B4513', '#D2691E', '#FFD700', '#FF6347', '#4169E1', '#32CD32', '#FF69B4'],
  eyes: ['#000000', '#2C1608', '#1E90FF', '#32CD32', '#FF69B4', '#9370DB'],
  accessories: ['#FFD700', '#C0C0C0', '#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF', '#FFA500'],
  background: ['#FF6B9D', '#4ECDC4', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3', '#FFE66D', '#A8E6CF']
};

// Generate a pixel avatar SVG
const generatePixelAvatar = (id: number): PixelAvatar => {
  const seed = id;
  const skinColor = colorPalettes.skin[seed % colorPalettes.skin.length];
  const hairColor = colorPalettes.hair[(seed * 2) % colorPalettes.hair.length];
  const eyeColor = colorPalettes.eyes[(seed * 3) % colorPalettes.eyes.length];
  const bgColor = colorPalettes.background[(seed * 5) % colorPalettes.background.length];
  const accessoryColor = colorPalettes.accessories[(seed * 7) % colorPalettes.accessories.length];

  // Different avatar styles based on id
  const style = seed % 10;

  let pixels = '';

  // Generate different pixel patterns based on style
  switch(style) {
    case 0: // Classic human
      pixels = `
        <!-- Hair -->
        <rect x="2" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="1" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="7" y="2" width="1" height="1" fill="${hairColor}"/>
        <!-- Face -->
        <rect x="2" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="2" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${skinColor}"/>
        <!-- Eyes -->
        <rect x="3" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${eyeColor}"/>
        <!-- Mouth -->
        <rect x="3" y="5" width="1" height="1" fill="#000000" opacity="0.3"/>
        <rect x="4" y="5" width="1" height="1" fill="#000000" opacity="0.3"/>
        <rect x="5" y="5" width="1" height="1" fill="#000000" opacity="0.3"/>
        <rect x="2" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="2" y="5" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="5" width="1" height="1" fill="${skinColor}"/>
        <rect x="2" y="6" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="6" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="6" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="6" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="6" width="1" height="1" fill="${skinColor}"/>
      `;
      break;
    case 1: // Robot
      pixels = `
        <!-- Antenna -->
        <rect x="4" y="0" width="1" height="1" fill="${accessoryColor}"/>
        <!-- Head -->
        <rect x="2" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${hairColor}"/>
        <!-- Screen -->
        <rect x="3" y="2" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="3" y="3" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="4" y="3" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${accessoryColor}"/>
        <!-- Eyes -->
        <rect x="3" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${eyeColor}"/>
        <!-- Body -->
        <rect x="2" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${hairColor}"/>
        <!-- Mouth -->
        <rect x="3" y="5" width="1" height="1" fill="#000000" opacity="0.4"/>
        <rect x="4" y="5" width="1" height="1" fill="#000000" opacity="0.4"/>
        <rect x="5" y="5" width="1" height="1" fill="#000000" opacity="0.4"/>
      `;
      break;
    case 2: // Cat
      pixels = `
        <!-- Ears -->
        <rect x="1" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="0" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="0" width="1" height="1" fill="${hairColor}"/>
        <rect x="7" y="1" width="1" height="1" fill="${hairColor}"/>
        <!-- Head -->
        <rect x="2" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${hairColor}"/>
        <!-- Eyes -->
        <rect x="3" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${eyeColor}"/>
        <!-- Nose -->
        <rect x="4" y="4" width="1" height="1" fill="#FF69B4"/>
        <!-- Face -->
        <rect x="2" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="5" width="1" height="1" fill="${hairColor}"/>
      `;
      break;
    case 3: // Alien
      pixels = `
        <!-- Antennae -->
        <rect x="2" y="0" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="0" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="2" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <!-- Head -->
        <rect x="3" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${hairColor}"/>
        <!-- Large Eyes -->
        <rect x="2" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="3" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${eyeColor}"/>
        <!-- Face -->
        <rect x="2" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="5" width="1" height="1" fill="${hairColor}"/>
      `;
      break;
    case 4: // Punk
      pixels = `
        <!-- Mohawk -->
        <rect x="4" y="0" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="1" width="1" height="1" fill="${hairColor}"/>
        <!-- Face -->
        <rect x="2" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${skinColor}"/>
        <!-- Sunglasses -->
        <rect x="2" y="3" width="1" height="1" fill="#000000"/>
        <rect x="3" y="3" width="1" height="1" fill="#000000"/>
        <rect x="4" y="3" width="1" height="1" fill="#000000"/>
        <rect x="5" y="3" width="1" height="1" fill="#000000"/>
        <rect x="6" y="3" width="1" height="1" fill="#000000"/>
        <!-- Face Bottom -->
        <rect x="2" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${skinColor}"/>
        <!-- Mouth -->
        <rect x="3" y="5" width="1" height="1" fill="#000000" opacity="0.4"/>
        <rect x="4" y="5" width="1" height="1" fill="#000000" opacity="0.4"/>
        <rect x="5" y="5" width="1" height="1" fill="#000000" opacity="0.4"/>
        <!-- Piercing -->
        <rect x="4" y="6" width="1" height="1" fill="${accessoryColor}"/>
      `;
      break;
    case 5: // Ninja
      pixels = `
        <!-- Headband -->
        <rect x="2" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="3" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="4" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="5" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <!-- Mask -->
        <rect x="2" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${hairColor}"/>
        <!-- Eyes -->
        <rect x="3" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${eyeColor}"/>
        <!-- Mask continues -->
        <rect x="2" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="5" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="5" width="1" height="1" fill="${hairColor}"/>
      `;
      break;
    case 6: // Bear
      pixels = `
        <!-- Ears -->
        <rect x="1" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="7" y="1" width="1" height="1" fill="${hairColor}"/>
        <!-- Head -->
        <rect x="2" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="3" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${hairColor}"/>
        <!-- Face -->
        <rect x="3" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${skinColor}"/>
        <!-- Eyes -->
        <rect x="3" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${eyeColor}"/>
        <!-- Snout -->
        <rect x="2" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="5" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="5" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="5" width="1" height="1" fill="${skinColor}"/>
        <!-- Nose -->
        <rect x="4" y="5" width="1" height="1" fill="#000000"/>
      `;
      break;
    case 7: // Wizard
      pixels = `
        <!-- Hat -->
        <rect x="4" y="0" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${hairColor}"/>
        <!-- Face -->
        <rect x="2" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${skinColor}"/>
        <!-- Eyes -->
        <rect x="3" y="3" width="1" height="1" fill="${eyeColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${eyeColor}"/>
        <!-- Beard -->
        <rect x="2" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="2" y="5" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="3" y="5" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="4" y="5" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="5" y="5" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="5" width="1" height="1" fill="${accessoryColor}"/>
      `;
      break;
    case 8: // Astronaut
      pixels = `
        <!-- Helmet -->
        <rect x="2" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="3" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="4" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="5" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="1" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="2" y="2" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${accessoryColor}"/>
        <!-- Visor -->
        <rect x="3" y="2" width="1" height="1" fill="#87CEEB"/>
        <rect x="4" y="2" width="1" height="1" fill="#87CEEB"/>
        <rect x="5" y="2" width="1" height="1" fill="#87CEEB}"/>
        <rect x="3" y="3" width="1" height="1" fill="#87CEEB"/>
        <rect x="4" y="3" width="1" height="1" fill="#87CEEB"/>
        <rect x="5" y="3" width="1" height="1" fill="#87CEEB"/>
        <!-- Reflection -->
        <rect x="3" y="2" width="1" height="1" fill="#FFFFFF" opacity="0.5"/>
        <!-- Helmet Bottom -->
        <rect x="2" y="3" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="2" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${accessoryColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${accessoryColor}"/>
      `;
      break;
    case 9: // Vampire
      pixels = `
        <!-- Hair -->
        <rect x="2" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="3" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="4" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="5" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="1" width="1" height="1" fill="${hairColor}"/>
        <rect x="2" y="2" width="1" height="1" fill="${hairColor}"/>
        <rect x="6" y="2" width="1" height="1" fill="${hairColor}"/>
        <!-- Face -->
        <rect x="3" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="2" width="1" height="1" fill="${skinColor}"/>
        <rect x="2" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="3" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="3" width="1" height="1" fill="${skinColor}"/>
        <!-- Red Eyes -->
        <rect x="3" y="3" width="1" height="1" fill="#FF0000"/>
        <rect x="5" y="3" width="1" height="1" fill="#FF0000"/>
        <!-- Fangs -->
        <rect x="2" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="4" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="5" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="6" y="4" width="1" height="1" fill="${skinColor}"/>
        <rect x="3" y="5" width="1" height="1" fill="#FFFFFF"/>
        <rect x="5" y="5" width="1" height="1" fill="#FFFFFF"/>
      `;
      break;
    default:
      pixels = '';
  }

  const svg = `<svg width="100%" height="100%" viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect x="0" y="0" width="9" height="8" fill="${bgColor}"/>
    ${pixels}
  </svg>`;

  return {
    id: `pixel-avatar-${id}`,
    svg,
    colors: [skinColor, hairColor, eyeColor, bgColor, accessoryColor]
  };
};

// Generate 150 unique pixel avatars
export const pixelAvatars: PixelAvatar[] = Array.from({ length: 150 }, (_, i) => generatePixelAvatar(i));

// Helper function to get avatar by ID
export const getAvatarById = (id: string): PixelAvatar | undefined => {
  return pixelAvatars.find(avatar => avatar.id === id);
};

// Helper function to get random avatar
export const getRandomAvatar = (): PixelAvatar => {
  const randomIndex = Math.floor(Math.random() * pixelAvatars.length);
  return pixelAvatars[randomIndex];
};
