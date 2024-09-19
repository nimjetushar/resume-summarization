import csv

file_name = "candidate.csv"
fieldnames = ["employName", "gender", "skills", "mobileNumber", "emailId"]

def update_file():
    with open(file_name, mode="w") as csv_file:
        writer = csv.writer(csv_file)

        writer.writerow(["111","asfadsf","sdfgsg"])

update_file()