import os
import openai

openai.api_key = os.getenv('sk-Jasez4MC7XQtLQf9EpTGFSpvFHwtJw99ZXI7QpgF')

response = openai.Completion.create(engine="davinci", prompt="This is a test", max_tokens=5)

