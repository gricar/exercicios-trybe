from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)

# pegando todos os titulos do livro direto da fonte

# O título está no atributo title em um elemento âncora (<a>) Dentro de um h3 em elementos que possuem classe product_pod
titles = selector.css(
    ".product_pod h3 a::attr(title)"
).getall()  # Estamos utilizando a::attr(title) para capturar somente o valor contido no texto do seletor
# print(titles)

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
prices = selector.css(".product_price .price_color::text").getall()
# print(prices)

# Combinando tudo podemos buscar os produtos em em seguida buscar os valores individualmente
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)

""" Outra forma de acessar os titulos dos livros"""
# pegando todos os titulos do livro entrando em outras páginas
all_thumbs_url = selector.css("div.image_container a::attr(href)").getall()
""" for url in all_thumbs_url:
    thumb_request = requests.get("http://books.toscrape.com/" + url)
    thumb_selector = Selector(text=thumb_request.text)
    book_title = thumb_selector.css("div.product_main h1").get()
    print(book_title) """
