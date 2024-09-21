import requests

url = "http://localhost:11434/api/chat"

def summarize_cv(pdf_content):
    print("Analysing resume...")
    get_prompt = generate_prompt(pdf_content)

    summary = get_summary(get_prompt)
    name = get_name(get_prompt)
    total_year_of_experience = get_total_year_of_experience(get_prompt)
    gender = get_gender(get_prompt)
    skills = get_skills(get_prompt)
    companies = get_companies(get_prompt)
    mobile_number = get_mobile_number(get_prompt)
    email_id = get_email(get_prompt)

    return {
        "summary": summary,
        "name": name,
        "total_year_of_experience": total_year_of_experience,
        "gender": gender,
        "skills": skills,
        "companies": companies,
        "mobile_number": mobile_number,
        "email_id": email_id
    }

def get_summary(get_prompt):
    prompts = get_prompt("Summarize CV under 300 word and provide summarized text only.")
    return call_llm(prompts)

def get_name(get_prompt):
    prompts = get_prompt("Provide candidate name only.")
    return call_llm(prompts)

def get_total_year_of_experience(get_prompt):
    prompts = get_prompt("Provide candidate total year of experience only and in mentioned format (2years).")
    return call_llm(prompts)

def get_gender(get_prompt):
    prompts = get_prompt("Identify candidate gender and answer precisely as male or female only.")
    return call_llm(prompts)

def get_skills(get_prompt):
    prompts = get_prompt("Identify candidate technical skills and list all comma separated.")
    return call_llm(prompts)

def get_companies(get_prompt):
    prompts = get_prompt("Identify companies candidate has worked with and list all company name comma separated.")
    return call_llm(prompts)

def get_mobile_number(get_prompt):
    prompts = get_prompt("Provide candidate mobile number only and return empty if not found.")
    return call_llm(prompts)

def get_email(get_prompt):
    prompts = get_prompt("Provide candidate email id only and return empty if not found.")
    return call_llm(prompts)

def call_llm(messages):
    data = {
        "model": "llama3.1",
        "messages": messages,
        "stream": False,
    }

    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(url, headers=headers, json=data)
    return response.json()["message"]["content"]

def generate_prompt(pdf_content):
    def update_message(message):
        prompt = \
        f"""
            {message}
            
            CV content is between triple backtick.

            CV: ```{pdf_content}```

            Note: Skip personal information.
        """
        return [
            {
                "role": "user",
                "content": prompt
            }
        ]
    return update_message


