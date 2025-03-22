/*
 * @license
 * Copyright (c) 2025 Rljson
 *
 * Use of this source code is governed by terms that can be
 * found in the LICENSE file in the root of this package.
 */

import { execSync } from 'child_process';

// Converts a string to kebab-case
function toKebabCase(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with dashes
    .replace(/^-+|-+$/g, ''); // Remove leading or trailing dashes
}

// Get command line arguments
const input = process.argv.slice(2).join(' ');

if (!input) {
  console.error('❌ Please provide a branch name.');
  process.exit(1);
}

const kebabCaseName = toKebabCase(input);

try {
  // Create new Git branch
  execSync(`git checkout -b ${kebabCaseName}`, { stdio: 'inherit' });
  console.log(`✅ Created new branch: '${kebabCaseName}'`);
} catch (error) {
  console.error('❌ Failed to create branch:', error.message);
}
