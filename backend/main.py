# Python Example
import json
from rich import print
import re
from openai import OpenAI
from prompts import SYSTEM_PROMPT, JSON_PROCESSOR_PROMPT, SECTION_ANALYZER_PROMPT, JSON_MODIFIER_PROMPT
from dotenv import load_dotenv
import os

load_dotenv()

# Function to load JSON
def load_schema(file_path):
    with open(file_path, 'r') as f:
        return json.load(f)

def query_openai_section_analyzer(prompt, json_data):
    """First AI agent that analyzes which sections need to be modified"""
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    
    completion = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": SECTION_ANALYZER_PROMPT},
            {"role": "user", "content": f"Analyze this request and identify affected sections.\nRequest: {prompt}\n\nJSON Structure:\n{json.dumps(json_data, indent=2)}"}
        ]
    )
    return completion.choices[0].message.content

def query_openai_json_processor(text_to_process):
    """Second AI agent that processes and formats JSON"""
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    
    completion = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": JSON_PROCESSOR_PROMPT},
            {"role": "user", "content": f"Process this text and return valid JSON:\n{text_to_process}"}
        ]
    )
    return completion.choices[0].message.content

def query_openai_final_json_modifier(original_json, sections_analysis, changes_to_make):
    """Final AI agent that implements changes to a copy of the original JSON"""
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    
    # Now get AI to modify the content
    completion = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": JSON_MODIFIER_PROMPT},
            {"role": "user", "content": f"""
                Original JSON:
                {json.dumps(original_json, indent=2)}

                Section that needs to be modified:
                {sections_analysis}

                Modified New section:
                {changes_to_make}

                Please return the complete JSON with only these specific changes implemented - only change the section that needs to be modified with the new section provided."""}
        ]
    )
    
    modified_json = completion.choices[0].message.content
    
    try:
        # Parse the response to ensure it's valid JSON
        modified_json_parsed = json.loads(modified_json)
        return modified_json_parsed
        
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON response from AI: {e}")
        return None

def query_openai(prompt, json_data):
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    
# First AI identifies relevant sections
    sections_to_modify = query_openai_section_analyzer(prompt, json_data)
    print("ANALYZER: Sections to modify:", sections_to_modify)
    
    # Second AI generates the response based on identified sections
    completion = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": f"Relevant sections to modify:\n{sections_to_modify}\n\nRequest: {prompt}\n\nFull JSON Schema:\n{json.dumps(json_data, indent=2)}"}
        ]
    )

    task_to_do = completion.choices[0].message.content
    print("MAIN AGENT:", task_to_do)
    
    # Third AI processes and formats the JSON
    changed_section_json = query_openai_json_processor(task_to_do)  # This line was using first_response instead of task_to_do
    print("PROCESSOR:", changed_section_json)
    
    # Final AI implements the changes in a copy of the original JSON
    final_json = query_openai_final_json_modifier(json_data, sections_to_modify, changed_section_json)
    
    # Save the final modified JSON back to the original file
    with open("solution-section.json", 'w') as f:
        json.dump(final_json, f, indent=2)
    print("Final JSON saved to solution-section.json")

# Example usage:
if __name__ == "__main__":
    schema = load_schema("solution-section.json")
    user_prompt = "Change the header text to 'Welcome to My Website'."
    query_openai(user_prompt, schema)
    