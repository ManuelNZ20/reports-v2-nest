import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import * as path from 'path';
import { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
  Roboto: {
    normal: path.join(process.cwd(), 'fonts', 'Roboto-Regular.ttf'),
    bold: path.join(process.cwd(), 'fonts', 'Roboto-Medium.ttf'),
    italics: path.join(process.cwd(), 'fonts', 'Roboto-Italic.ttf'),
    bolditalics: path.join(
      process.cwd(),
      'src',
      'fonts',
      'Roboto-MediumItalic.ttf',
    ),
  },
};

@Injectable()
export class PrinterService {
  private printer = new PdfPrinter(fonts);

  createPdf(
    docDefinition: TDocumentDefinitions,
    options: BufferOptions = {},
  ): PDFKit.PDFDocument {
    return this.printer.createPdfKitDocument(docDefinition, options);
  }
}
