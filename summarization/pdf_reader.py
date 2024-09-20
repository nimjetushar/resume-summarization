import os

from PyPDF2 import PdfReader

def read_pdf(f):
    print("Reading resume...")
    reader = PdfReader(f)

    number_of_pages = len(reader.pages)
    print("Total Pages: ", number_of_pages)

    page_content = ""

    for page_number in range(number_of_pages):
        page = reader.pages[page_number]
        page_content += page.extract_text()

    print("Resume read")
    return page_content

def read_all_file():
    directory = "./resumes"

    for fileName in os.listdir(directory):
        f = os.path.join(directory, fileName)

        if (os.path.isfile(f) and ".pdf" in f):
            print(f)

read_all_file()