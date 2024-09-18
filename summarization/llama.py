import requests

url = "http://localhost:11434/api/chat"

prompt = """
Summarize the resume content for HR and respond in json format only.

#####

Follow below instructions very strictly:
--------------------------------------------
1. Provide overall summary of candidate.
2. Identify name of candidate.
3. Identify total year of experience.

"""

def llama3(pdf_content):
    prompt_with_content = prompt + pdf_content

    data = {
        "model": "llama3.1",
        "messages": [
            {
                "role": "user",
                "content": prompt_with_content
            }
        ],
        "stream": False,
    }

    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(url, headers=headers, json=data)
    return response.json()