// Sync Token System for Web Browser Extension Sync (WBES)
// Generates unique tokens to sync user data between web and extension

const TOKEN_PREFIXES = [
  'WBES', // Web Browser Extension Sync (primary)
  'TBKS', // TabKeep Sync (fallback 1)
  'USRS', // User Sync (fallback 2)
  'XSYN', // Cross Sync (fallback 3)
  'DEVS', // Device Sync (fallback 4)
];

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const TOKEN_LENGTH = 50; // 50 random characters after prefix

/**
 * Generate a random string of specified length
 */
function generateRandomString(length: number): string {
  let result = '';
  const charactersLength = CHARS.length;

  // Use crypto.getRandomValues for better randomness
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {
    result += CHARS.charAt(randomValues[i] % charactersLength);
  }

  return result;
}

/**
 * Generate a unique sync token
 * Format: PREFIX + 50 random alphanumeric characters
 * Example: WBESa3kD9fL2mN7pQ8rS1tV4wX6yZ0bC5eG8hJ3kL7mN2pQ4rS9tV1wX
 */
export function generateSyncToken(prefixIndex: number = 0): string {
  const prefix = TOKEN_PREFIXES[prefixIndex] || TOKEN_PREFIXES[0];
  const randomPart = generateRandomString(TOKEN_LENGTH);
  return `${prefix}${randomPart}`;
}

/**
 * Validate sync token format
 */
export function validateSyncToken(token: string): boolean {
  if (!token || typeof token !== 'string') {
    return false;
  }

  // Check if token starts with any valid prefix
  const hasValidPrefix = TOKEN_PREFIXES.some(prefix => token.startsWith(prefix));
  if (!hasValidPrefix) {
    return false;
  }

  // Check length (prefix + 50 chars)
  const validLengths = TOKEN_PREFIXES.map(p => p.length + TOKEN_LENGTH);
  if (!validLengths.includes(token.length)) {
    return false;
  }

  // Check if all characters after prefix are valid
  const prefix = TOKEN_PREFIXES.find(p => token.startsWith(p));
  if (!prefix) return false;

  const randomPart = token.slice(prefix.length);
  const validCharsRegex = /^[A-Za-z0-9]+$/;

  return validCharsRegex.test(randomPart);
}

/**
 * Get the prefix from a sync token
 */
export function getTokenPrefix(token: string): string | null {
  const prefix = TOKEN_PREFIXES.find(p => token.startsWith(p));
  return prefix || null;
}

/**
 * Check if a token exists in the database (collision detection)
 * This should be implemented with your actual database query
 */
export async function checkTokenCollision(token: string): Promise<boolean> {
  // This will be implemented with Supabase query
  // For now, return false (no collision)
  return false;
}

/**
 * Generate a unique sync token with collision detection
 * If collision detected, use next prefix
 */
export async function generateUniqueSyncToken(): Promise<string> {
  let prefixIndex = 0;
  let token = generateSyncToken(prefixIndex);

  // Check for collision and try different prefixes if needed
  while (await checkTokenCollision(token) && prefixIndex < TOKEN_PREFIXES.length - 1) {
    prefixIndex++;
    token = generateSyncToken(prefixIndex);
  }

  return token;
}

/**
 * Parse sync token to get metadata
 */
export function parseSyncToken(token: string): {
  valid: boolean;
  prefix: string | null;
  randomPart: string | null;
} {
  const valid = validateSyncToken(token);

  if (!valid) {
    return {
      valid: false,
      prefix: null,
      randomPart: null,
    };
  }

  const prefix = getTokenPrefix(token);
  const randomPart = prefix ? token.slice(prefix.length) : null;

  return {
    valid: true,
    prefix,
    randomPart,
  };
}
