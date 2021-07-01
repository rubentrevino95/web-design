import os
import openai
from keys import keys

openai.api_key = os.getenv(keys)

response = openai.Completion.create(engine="davinci", prompt="This is a test", max_tokens=5)