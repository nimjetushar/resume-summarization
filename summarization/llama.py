import requests

url = "http://localhost:11434/api/generate"

prompt = """
Your task is to summarize CV based on provided instructions and respond in json format only.

CV content is delimited by triple backticks.

#####

Follow below instructions very strictly:
--------------------------------------------
1. Provide overall summary of candidate under 300 words.
2. Identify name of candidate.
3. Identify total year of experience.
4. Identify gender of candidate.
5. Identify list of technical skills.
6. Identify list of companies candidate has worked with.
7. Identify candidate mobile number and email id.

"""

def llama3(pdf_content):
    prompt_with_content = \
        f"""
        {prompt}
        
        CV: ```{pdf_content}```"""

    data = {
        "model": "llama3.1",
        "prompt": prompt_with_content,
        "format": "json",
        "stream": False,
    }

    headers = {
        "Content-Type": "application/json"
    }

    print("Analysing resume...")
    response = requests.post(url, headers=headers, json=data)
    return response.json()