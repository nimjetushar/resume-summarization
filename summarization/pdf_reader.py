from PyPDF2 import PdfReader

def read_pdf():
    print("Reading resume...")
    reader = PdfReader("./resumes/Pushkar Masodkar Resume .pdf")

    number_of_pages = len(reader.pages)
    print("Total Pages: ", number_of_pages)

    page_content = ""

    for page_number in range(number_of_pages):
        page = reader.pages[page_number]
        page_content += page.extract_text()

    print("Resume read")
    return page_content