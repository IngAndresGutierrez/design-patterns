interface FormBuilderProps {
  title?: string
  buttonText?: string
  withFooter?: boolean
}

const FormBuilder = () => {
  let formValues: FormBuilderProps = {}

  const builder = {
    setTitle: function (title: string) {
      formValues.title = title
      return this // Devuelve el builder para encadenar
    },
    setButtonText: function (buttonText: string) {
      formValues.buttonText = buttonText
      return this // Devuelve el builder para encadenar
    },
    enableFooter: function () {
      formValues.withFooter = true
      return this // Devuelve el builder para encadenar
    },
    build: function () {
      return formValues // Devuelve el objeto de configuración construido
    },
  }

  return builder
}

export default FormBuilder
