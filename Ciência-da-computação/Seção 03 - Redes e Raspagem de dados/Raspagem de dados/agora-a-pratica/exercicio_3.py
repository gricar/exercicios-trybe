"""Faça uma requisição e verifique se foi bem sucedida."""

import requests


response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)

print(response.status_code)  # 200

assert "bot detected" not in response.text
# Se nada acontecer, seu código está funcionando.
