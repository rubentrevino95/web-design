import os
import openai

openai.api_key = os.getenv('OPEN_AI_KEY')

response = openai.Completion.create(engine="davinci", prompt="This is a test", max_tokens=5)

