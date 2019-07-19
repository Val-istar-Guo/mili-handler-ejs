import test from 'ava'
import ejs from '@/index'

test('ejs handler', async t => {
  const handler = ejs()

  t.is(await handler.genPath('/a/b/c.ejs'), '/a/b/c')
  const file = {
    content: `<%= project.name %>`,
    addition: {},
  }

  const resource = {
    mili: { version: '0.0.0' },
    project: { name: 'test' },
    template: {},
    answers: {},
  }

  await handler.genFile(file, resource)

  t.snapshot(file.content)
})
