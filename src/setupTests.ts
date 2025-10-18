// Minimal polyfills for Jest/jsdom environment
// Provide TextEncoder/TextDecoder if missing
if (typeof (global as any).TextEncoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { TextEncoder, TextDecoder } = require('util');
  (global as any).TextEncoder = TextEncoder;
  (global as any).TextDecoder = TextDecoder;
}

// jest-dom matchers
import '@testing-library/jest-dom';
