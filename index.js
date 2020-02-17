#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const argv = require('yargs')
  .option('name', {
    alias: 'n',
    describe: 'Parts name',
    type: 'string'
  })
  .option('path', {
    alias: 'p',
    describe: 'Directory path',
    default: 'src/components/parts',
    type: 'string'
  })
  .option('framework', {
    alias: 'f',
    describe: 'Framework',
    default: 'svelte',
    type: 'string'
  })
  .demandOption(['name'], 'Please speficy name.')
  .argv

async function start () {
  switch (argv.framework) {
    case 'svelte': {
      const dirPath = path.join(process.cwd(), argv.path, argv.name)
      const sveltePath = path.join(dirPath, `${argv.name}.svelte`)
      const storybookPath = path.join(dirPath, `${argv.name}.stories.js`)
      const svelteSrc = require('./templates-svelte/parts')()
      const storybookSrc = require('./templates-svelte/storybook')({
        name: argv.name
      })

      await fs.outputFile(sveltePath, svelteSrc)
      await fs.outputFile(storybookPath, storybookSrc)

      return
    }
    default:
      throw new Error(`framework: ${argv.framework}, not found.`)
  }
}

start()
