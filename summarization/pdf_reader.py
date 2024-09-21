from PyPDF2 import PdfReader

def read_pdf(f):
    print("Reading resume...")
    reader = PdfReader(f)

    number_of_pages = len(reader.pages)
    print("File: ", f)
    print("Total Pages: ", number_of_pages)

    page_content = ""

    for page_number in range(number_of_pages):
        page = reader.pages[page_number]
        page_content += page.extract_text()

    print("Resume read")
    return page_content