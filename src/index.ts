import ejs from 'ejs'

export default function(options?: ejs.Options) {
  const genFile = async(file, resource) => {
    const view = {
      mili: resource.mili,
      project: resource.project,
      template: resource.template,
      answers: resource.answers,
      addition: file.addition,
    }

    file.content = ejs.render(file.content, view, options)
  }

  const genPath = async path => path.replace(/.ejs$/, '')

  return { genFile, genPath }
}
