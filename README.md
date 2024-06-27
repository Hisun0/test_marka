# Тестовое задание

Вся задача описана здесь ([тык](https://nwamo.notion.site/JavaScript-9471f700b7de439682db6dc8c13e282f))

## Запуск

Для запуска проекта потребуется создать файл `/backend/.env` и заполнить его в соответствии с `.env.example`. `ACCESS_TOKEN` нужно брать из AmoCRM (сначала регаемся [здесь](https://www.amocrm.ru/), а потом идем в [доку](https://www.amocrm.ru/developers/content/oauth/step-by-step))

После того, как настроили `ACCESS_TOKEN`, прописываем в `/backend` следующее:

```bash
npm run start:dev
```

## Эндпоинт

`GET /api/leads`

Результат:

   ```json
   {
    "success": true,
    "status": 200,
    "message": "Success!",
    "leads": [
        {
            "createdAt": "1970-01-20T21:37:17.747Z",
            "manager": "Rodion",
            "name": "test",
            "pipeline": {
                "id": 67864866,
                "name": "Первичный контакт",
                "sort": 20,
                "is_editable": true,
                "pipeline_id": 8324806,
                "color": "#99ccff",
                "type": 0,
                "account_id": 31820778,
                "_links": {
                    "self": {
                        "href": "https://9313200562mr.amocrm.ru/api/v4/leads/pipelines/8324806/statuses/67864866"
                    }
                }
            },
            "price": 100000
        },
        {
            "createdAt": "1970-01-20T21:37:22.965Z",
            "manager": "Rodion",
            "name": "new",
            "pipeline": {
                "id": 67864870,
                "name": "Переговоры",
                "sort": 30,
                "is_editable": true,
                "pipeline_id": 8324806,
                "color": "#ffff99",
                "type": 0,
                "account_id": 31820778,
                "_links": {
                    "self": {
                        "href": "https://9313200562mr.amocrm.ru/api/v4/leads/pipelines/8324806/statuses/67864870"
                    }
                }
            },
            "price": 498530
        }
    ]
}
   ```
