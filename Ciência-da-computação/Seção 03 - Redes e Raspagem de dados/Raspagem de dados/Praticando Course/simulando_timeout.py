import requests


try:
    # recurso demora muito a responder
    print('realiza primeira tentativa')
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    print('entrou na except')
    response = requests.get("http://httpbin.org/delay/1", timeout=6)
finally:
    print('finalmente...')
    print(response.status_code)