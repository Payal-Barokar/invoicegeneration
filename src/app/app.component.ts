import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bsctax';

  generatePDF() {
    let docDefinition = {
      content: [
        {
          // in browser is supported loading images via url from reference by name in images
        },

        {
          table: {
            widths: ['*', '*', 100],

            body: [
              [
                {
                  image:
                    'data:image/png;base64,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',
                  width: 80,
                  height: 50,
                },
                '',
                'Remit to: \n P O Box 23\n Hugo MN 2345',
              ],
              ['', '\n', '\n'],
              ['', '\n', '\n'],
              ['', '\n', '\n'],
            ],
          },
          layout: 'noBorders',
        },

        {
          style: 'header',
          color: '#444',
          table: {
            // widths: [200, 200, '*'],
            widths: [300, '*', 100],

            body: [
              [
                {
                  rowSpan: 6,
                  text: 'Prepared for:\n  A/507, Titanium Heights, \nPrahlad Nagar,\n Ahmedabad,\n Gujarat 380015',
                },

                '\n',
                '\n',
              ],
              ['', 'Invoice #:', '12345'],
              ['', 'Invoice Date:', '02-FEb-2022'],
              ['', '\n', '\n'],
              ['', '\n', '\n'],
              ['', '\n', '\n'],
            ],
          },
          layout: 'noBorders',
        },
        {
          table: {
            headerRows: 1,
            widths: [300, 100, '*'],
            // heights: ['', '','','','', 250],
            body: [
              [
                {
                  text: 'Services Rendered',
                  alignment: 'center',
                  border: [false, false, false, true],
                },
                {
                  text: 'Hour (s)',
                  alignment: 'center',
                  border: [false, false, false, true],
                },
                {
                  text: 'Amount',
                  alignment: 'center',
                  border: [false, false, false, true],
                },
              ],
              [
                {
                  text: 'Setup 2-factor authentication for USPTO and tested obtaining code through automation.\n\n',
                  border: [false, false, true, false],
                },
                {
                  text: ' 2.25',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: '393.75',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Investigated handling Captcha for the USPTO login page.\n\n',
                  border: [false, false, true, false],
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Updated USPTO to maintain session state.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '5.68',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: '994.00',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                {
                  text: 'Added ability to catch USPTO inactivity timeout warning.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.8',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: '315.00',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                {
                  text: 'Fixed IPMgr browser hang after GetAllMatters and 3.73 652.75 GetActionsResport methods. Updated 2-factor authentication login flow.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '3.73',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: '652.75',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Investigated handling Captcha for the USPTO login page.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Added ability to catch USPTO inactivity timeout warning.\n\n',
                  border: [false, false, true, false],
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Setup 2-factor authentication for USPTO and tested obtaining code through automation.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Setup 2-factor authentication for USPTO and tested obtaining code through automation.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Investigated handling Captcha for the USPTO login page.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Setup 2-factor authentication for USPTO and tested obtaining code through automation.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Added ability to catch USPTO inactivity timeout warning.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Added ability to catch USPTO inactivity timeout warning.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Added ability to catch USPTO inactivity timeout warning.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { 
                  text: 'Setup 2-factor authentication for USPTO and tested obtaining code through automation.',
                  border: [false, false, true, false],
                  style:'lineSpacing'
                },
                {
                  text: '1.1',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
                {
                  text: ' 192.50',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
            ],
          },
        },

        {
          table: {
            headerRows: 1,
            border: [false, false, false, true],
            widths: [300, 100, '*'],
            body: [
              [ {
                text: '',
                border: [false, true, false, false],
              },
              {
                text: 'Invoice Total',
                border: [false, true, false, true],
                alignment :'right'
              },
              {
                text: '$2,548.00',
                border: [false, true, false, true],
                alignment :'right'
              },
               ]
            ]
          },
          //  layout: 'noBorders',
        },
      ],

      styles: {
        header: {
          bold: true,
        },
        tableHeader: {
          bold: true,
          alignment: 'center',
        },
        tablecontent: {
          bold: true,
        },
      lineSpacing: {
          margin:[0,0,0,10] //change number 6 to increase nspace
      }
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
