import { fileURLToPath } from 'url'

const resolveDistPath = relativePath =>
  fileURLToPath(new URL(relativePath, import.meta.url))

function previewAnnotations(entry = []) {
  return [...entry, resolveDistPath('../dist/preview.js')]
}

function managerEntries(entry = []) {
  return [...entry, resolveDistPath('../dist/manager.js')]
}

export default {
  managerEntries,
  previewAnnotations,
}
