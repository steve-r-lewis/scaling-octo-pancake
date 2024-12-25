// src/generateUUID.ts
import { randomBytes } from 'crypto';

/**
 * Generates a UUID (version 4) conforming to RFC 4122 standards.
 *
 * UUIDs are 128-bit identifiers formatted as 32 hexadecimal characters, including hyphens for separation.
 * This implementation uses Node.js's built-in `crypto` module to generate random bytes.
 *
 * @returns {string} A version 4 UUID as a string.
 */
export function generateUUID(): string {
	const rnds = randomBytes(16);
	rnds[6] = (rnds[6] & 0x0f) | 0x40; // Set version to 4
	rnds[8] = (rnds[8] & 0x3f) | 0x80; // Set variant to 1
	
	return Array.from(rnds)
		.map((byte, index) => {
			const hex = byte.toString(16).padStart(2, '0');
			return index === 4 || index === 6 || index === 8 || index === 10 ? `-${hex}` : hex;
		})
		.join('');
}
