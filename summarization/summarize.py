from llama import llama3
from pdfreader import read_pdf

pdf_content = read_pdf()

response = llama3(pdf_content)

print(response)