# AI-Powered JSON Schema Editor

A Python-based application that uses OpenAI's GPT-4 to intelligently modify JSON schemas based on natural language requests.

## Features

- **Intelligent Section Analysis**: Uses GPT-4 to identify which sections of the JSON need modification based on user requests
- **JSON Processing**: Validates and formats JSON modifications to ensure data integrity
- **Multi-Agent System**: Employs multiple AI agents for different tasks:
  - Section Analyzer: Determines which parts of the JSON need changes
  - JSON Processor: Formats and validates JSON modifications
  - JSON Modifier: Implements changes while preserving the original structure

## To-implement

Currently the system only works with the `solution-section.json` file. It should be able to work with any JSON file. 
Also, it'll overwrite the original file with the modified one and it'll be dynamically linked to the frontend.

And of course all of the other features like image input/output, etc...
