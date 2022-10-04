from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# print(selector)

# Pegando o 1º item que satisfaz a condição de "imagem" e classe "thumbnail"
first_img = selector.css("img.thumbnail").get()
# print(first_img)

# Pegando todos que satisfaçam essa condição
all_imgs_array = selector.css("img.thumbnail").getall()
# print(all_imgs_array)

# Pegando o item filho da div
tag_a = selector.css("div.image_container a").get()
# print(tag_a)

# Pegando o conteúdo do atributo
thumb_url = selector.css("div.image_container a::attr(href)").get()
# print(thumb_url)

# simulando um clique na imagem e abrindo outra página
thumb_request = requests.get("http://books.toscrape.com/" + thumb_url)
thumb_selector = Selector(text=thumb_request.text)

book_title = thumb_selector.css("div.product_main h1").get()
# print(book_title)

