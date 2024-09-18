from PyPDF2 import PdfReader

def readpdf():
    reader = PdfReader('./Tushar Nimje - JavaScript developer - 8 year.pdf')

    number_of_pages = len(reader.pages)
    print("Total Pages: ", number_of_pages)

    page_content = ""

    for page_number in range(number_of_pages):  # use xrange in Py2
        page = reader.getPage(page_number)
        page_content += page.extractText()

    return page_content

readpdf()

def test():
    print('hello')

test()