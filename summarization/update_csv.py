import csv

file_name = "candidate.csv"
fieldnames = ["employName", "gender", "skills", "mobileNumber", "emailId"]

def update_file(list_of_candidate):
    with open(file_name, mode="w") as csv_file:
        writer = csv.writer(csv_file)

        for candidate in list_of_candidate:
            print(candidate)
            summary = "" if hasattr(candidate, "summary") else candidate["summary"]
            name = "" if hasattr(candidate, 'name') else candidate['name']

            print(name)
            writer.writerow([
                "" if hasattr(candidate, "name") else candidate["name"],
                "" if hasattr(candidate, "gender") else candidate["gender"],
                "" if hasattr(candidate, "email_id") else candidate["email_id"],
                "" if hasattr(candidate, "mobile_number") else candidate["mobile_number"],
                summary,
                "" if hasattr(candidate, "total_experience") else candidate["total_experience"],
                "" if hasattr(candidate, "technical_skills") else candidate["technical_skills"],
                "" if hasattr(candidate, "companies_worked_with") else candidate["companies_worked_with"]
            ])


data1 = {'summary': 'The candidate has 4+ years of experience in Software Testing with expertise in Manual Testing, Automation Testing using QTP & Selenium, and Test Management tools like Quality Center.', 'name': 'ABC', 'total_experience': 4, 'gender': None, 'technical_skills': ['Core Java', 'VB Script', 'Selenium Web Driver /IDE', 'QTP', 'Quality Center', 'Oracle Database', 'Eclipse Helios', 'Perforce, SVN'], 'companies_worked_with': ['ABC Technologies', 'Kwik-fit Insurance', 'Dharani Forestry (ABC Limited)', 'Macbee Health Group'], 'projects': {'Insurance Systems': {'client': 'Kwik-fit Insurance', 'domain': 'Insurance', 'technology': ['Java', 'Eclipse', 'Selenium WebDriver'], 'responsibilities': ['Understanding & Analyzing FRD documents.', 'Writing effective test cases as per the system requirements.', 'Automaton Script development using java in Selenium -webdriver and updating the existing automation scripts and executing them on new builds.']}, 'Hospital Systems': {'client': 'Macbee Health Group', 'domain': 'Health Care', 'technology': ['QTP', 'Manual Testing'], 'responsibilities': ['Understanding & Analyzing FRD documents.', 'Writing effective test cases as per the system requirements.', 'Automaton Script development using VbScript in QTP and updating the existing automation scripts and executing them on new builds.']}}}

data2 = {'summary': 'The candidate has 10 years of IT experience with expertise in mobile native/hybrid, responsive web applications, and modern web technologies. She has worked with various clients across USA and Canada from different domains.', 'name': 'Snigdha Mishra', 'total_experience': '10 years', 'gender': 'Female', 'technical_skills': ['HTML5', 'JavaScript frameworks', 'CSS3', 'Angular 2-13', 'Ionic/Cordova', 'Angular JS 1.2 and 1.6', 'jQuery', 'PhoneGap', 'jQuery Mobile', 'Objective C', 'Swift', 'NodeJS', 'AWS', 'Jasmine', 'karma'], 'companies_worked_with': ['Tata Consultancy Services', 'AST India Pvt. Ltd', 'Syntel India Pvt. Ltd', 'Credit Suisse', 'Product Buffet', 'CGI, Canada', 'Developer Tools', 'Visual Studio', 'VS Code', 'Xcode', 'Android Studio'], 'mobile_number': '7262801839', 'email_id': 'snigdham15@gmail.com'}

data3 = {'summary': 'The candidate is a male with experience in system administration, manual testing, desktop support, and networking. He has a strong educational background with B.C.A. and M.C.A. degrees from reputable institutions. His technical skills include proficiency in C Language, Visual Basic, Photoshop, and basic computer skills. The candidate has experience working with NIIT Technology Ltd. and CCTNS (Crime And Criminal Tracking Network System) projects.', 'name': 'ABC', 'total_year_of_experience': 10, 'gender': 'Male', 'technical_skills': ['C Language', 'Visual Basic', 'Photoshop', 'BASICS (MS -Office, Internet)', 'Team working ability', 'Work effectively with diverse groups of people.', 'Flexibility in workin g.', 'Creative and innovative thinking ', 'Honest, Responsible, Faithful. ', 'Can work under pressure.'], 'companies_worked_with': ['S.D. management', 'I.T.S.', 'NIIT Technology Ltd.', 'CCTNS (Crime And Criminal Tracking Network System)'], 'contact_info': {'mobile_number': 123, 'email_id': 'ABC@gmail.com'}}

list = [data1,data2,data3]

update_file(list)