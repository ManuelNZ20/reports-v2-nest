import type { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {
  name: String;
}

export const getHelloWorldReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { name } = options;
  const docDefinition: TDocumentDefinitions = {
    content: [
      `Hola mundo ${name}`,
      'Como te va?',
      'Muy bien, siempre estoy aprendiendo cosas nuevas.',
      'Goool de Perú!',
    ],
  };
  return docDefinition;
};
