import json
import os
import time
from llama import llama3
from pdf_reader import read_pdf
from update_csv import update_file

start_time = time.time()
directory = "./resumes"
list_of_candidate = []

for fileName in os.listdir(directory):
    f = os.path.join(directory, fileName)

    if os.path.isfile(f) and ".pdf" in f:
        pdf_content = read_pdf(f)
        response = llama3(pdf_content)
        json_data = json.loads(response["response"])
        print(json_data)
        list_of_candidate.append(json_data)

print("Time required for execution --- %s seconds ---" % (time.time() - start_time))
update_file(list_of_candidate)


