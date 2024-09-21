import os
import time
from dump_data import create_excel
from llama import summarize_cv
from pdf_reader import read_pdf

start_time = time.time()
directory = "./resumes"
list_of_candidate = []

for fileName in os.listdir(directory):
    f = os.path.join(directory, fileName)

    if os.path.isfile(f) and ".pdf" in f:
        pdf_content = read_pdf(f)
        cv_content = summarize_cv(pdf_content)
        print(cv_content)
        list_of_candidate.append(cv_content)

print("Time required for execution --- %s seconds ---" % (time.time() - start_time))
create_excel(list_of_candidate)


