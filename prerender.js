// Mete el HTML ya renderizado de la página dentro de dist/index.html,
// para que Google y las vistas previas lean el contenido sin ejecutar JavaScript.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const dist = path.resolve('dist')
const ssrDir = path.resolve('dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await readFile(path.join(dist, 'index.html'), 'utf8')

if (!template.includes('<!--app-html-->')) {
  throw new Error('No se encontró <!--app-html--> en dist/index.html')
}

await writeFile(path.join(dist, 'index.html'), template.replace('<!--app-html-->', render()))
await rm(ssrDir, { recursive: true, force: true })
console.log('Prerender listo: dist/index.html')
