import xlsxwriter

def create_excel(list_of_candidate):
    workbook = xlsxwriter.Workbook('candidate_data.xlsx')
    worksheet = workbook.add_worksheet()

    row = 0

    for item in list_of_candidate:
        worksheet.write(row, 0, item["name"])
        worksheet.write(row, 1, item["gender"])
        worksheet.write(row, 2, item["email_id"])
        worksheet.write(row, 3, item["mobile_number"])
        worksheet.write(row, 4, item["summary"])
        worksheet.write(row, 5, item["total_year_of_experience"])
        worksheet.write(row, 6, item["skills"])
        worksheet.write(row, 7, item["companies"])
        row += 1

    workbook.close()
