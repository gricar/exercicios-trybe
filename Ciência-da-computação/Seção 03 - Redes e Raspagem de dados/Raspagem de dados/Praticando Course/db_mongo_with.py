from pymongo import MongoClient


# Metodologia com "with" -> fecha o bd após a consulta
with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
