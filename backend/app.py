import os
from flask import Flask, jsonify, request # Добавим request позже
from pymongo import MongoClient
from dotenv import load_dotenv
# import passlib # пока не используем
# import jwt # пока не используем

# Загружаем переменные окружения из .env файла
load_dotenv()

# Создаем экземпляр Flask приложения
app = Flask(__name__)

# Получаем строку подключения к MongoDB из переменных окружения
mongo_uri = os.getenv('MONGO_URI')
if not mongo_uri:
    # Если строка подключения не найдена, выводим ошибку
    print("Критическая ошибка: Переменная окружения MONGO_URI не установлена в файле .env")
    # Можно установить дефолтное значение для локального тестирования, но лучше настроить .env
    # mongo_uri = "mongodb://localhost:27017/nftMarketplace" # Пример для локального MongoDB
    client = None
    db = None
else:
    # Подключаемся к MongoDB Atlas
    try:
        client = MongoClient(mongo_uri)
        # Получаем доступ к базе данных (если ее нет, она создастся при первой записи)
        # Пытаемся получить имя БД из URI или используем 'nftMarketplace' по умолчанию
        db_name_from_uri = MongoClient(mongo_uri).get_database().name
        db_name = db_name_from_uri if db_name_from_uri != 'test' else 'nftMarketplace' # Используем имя из URI или дефолтное

        db = client[db_name] # Доступ к БД по имени

        # Проверка соединения (опционально, но полезно)
        client.admin.command('ping')
        print(f"Успешное подключение к MongoDB! База данных: {db.name}") # Используем db.name для точности
    except Exception as e:
        print(f"Ошибка подключения к MongoDB: {e}")
        client = None # Указываем, что клиент не создан
        db = None

# -------- Маршруты API --------

# Тестовый маршрут для проверки работы сервера
@app.route('/')
def index():
    if client and db:
        # Пробуем получить список коллекций как доп. проверку
        try:
             collections = db.list_collection_names()
             db_status = f"Подключение к БД '{db.name}' есть. Коллекции: {collections}"
             status_code = 200
        except Exception as e:
             db_status = f"Ошибка при доступе к БД '{db.name}': {e}"
             status_code = 500
        return jsonify({"message": "Бэкенд для NFT Marketplace работает!", "db_status": db_status}), status_code
    else:
        return jsonify({"message": "Бэкенд для NFT Marketplace работает, но НЕТ подключения к БД!"}), 500

# -------- Запуск приложения --------
if __name__ == '__main__':
    # Debug=True позволяет автоматически перезагружать сервер при изменениях кода
    # и выводит подробные ошибки в браузер (не используйте в продакшене!)
    # Используем порт 5000 по умолчанию для Flask
    app.run(debug=True, port=5000)