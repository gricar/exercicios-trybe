from parsel import Selector
import requests

# Pegando todos os livros, navegando entre as 50 pags que contem 20 livros cada

# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    book_div = selector.css(".product_pod")
    # Imprime os produtos de uma determinada página
    for product in book_div:
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)
    print("--------------------------------------")
    print(f"fim da página {str(next_page_url.split('-')[1]).split('.')[0]}")
    print(f"total de livros: {len(book_div)}")
    print("--------------------------------------")
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()
