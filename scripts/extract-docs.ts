import fs from 'fs'
import path from 'path'

const RULES_DIR = 'components/tools/tslint-rules'
const README = 'README.md'

export const DOC_COMMENT_REGEX = /\/\*+((\s*\*.*\n)+)\s*\*\/\nexport class Rule/
;(async () => {
  const files = await fs.promises.readdir(RULES_DIR)

  const RULES: string[] = []

  for await (const file of files) {
    if (!file.endsWith('.ts')) {
      continue
    }
    const content = await fs.promises.readFile(
      path.resolve(RULES_DIR, file),
      'utf-8',
    )

    const matches = DOC_COMMENT_REGEX.exec(content)

    if (!matches) {
      continue
    }

    const rule = file
      .replace(/Rule\.ts$/, '')
      .replace(/([A-Z]+)/g, (_, $0) => '-' + $0.toLowerCase())
    const comment = matches[1].replace(/\n? \* ?/g, '\n')

    RULES.push(`### ${rule}\n${comment}`)
  }

  const originalReadme = await fs.promises.readFile('README.md', 'utf-8')

  await fs.promises.writeFile(
    README,
    originalReadme.replace(
      /<!-- Rules start -->.*<!-- Rules end -->/s,
      `<!-- Rules start -->
${RULES.join('\n')}<!-- Rules end -->`,
    ),
  )
})()
