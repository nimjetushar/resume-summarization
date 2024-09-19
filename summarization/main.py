from llama import llama3
from pdf_reader import read_pdf
import time

start_time = time.time()

pdf_content = read_pdf()

response = llama3(pdf_content)
content = response["message"]["content"]

print("Time required for execution --- %s seconds ---" % (time.time() - start_time))
print(content)