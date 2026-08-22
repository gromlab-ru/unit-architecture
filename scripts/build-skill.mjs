import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(repoRoot, 'src/skills/unit-architecture');
const outputDir = path.join(repoRoot, 'skills/unit-architecture');

fs.rmSync(outputDir, { force: true, recursive: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(path.join(sourceDir, 'SKILL.md'), path.join(outputDir, 'SKILL.md'));
fs.cpSync(path.join(repoRoot, 'docs'), path.join(outputDir, 'reference/docs'), {
  recursive: true,
});

console.log(`Built ${path.relative(repoRoot, outputDir)}`);
