let data = [
    {
        "№": 1,
        "sight": "Великая Китайская Стена",
        "country": "Китай",
        "city": "Пекин",
        "year": 1987,
        "tourists": 10000,
        "rating": 9.5
    },
    {
        "№": 2,
        "sight": "Мачу-Пикчу",
        "country": "Перу",
        "city": "Агуас Кальентес",
        "year": 1983,
        "tourists": 25000,
        "rating": 9.4
    },
    {
        "№": 3,
        "sight": "Собор Святого Петра",
        "country": "Италия",
        "city": "Рим",
        "year": 1984,
        "tourists": 4000,
        "rating": 9.3
    },
    {
        "№": 4,
        "sight": "Тадж-Махал",
        "country": "Индия",
        "city": "Агра",
        "year": 1983,
        "tourists": 7000,
        "rating": 9.2
    },
    {
        "№": 5,
        "sight": "Статуя Христа Спасителя",
        "country": "Бразилия",
        "city": "Рио-де-Жанейро",
        "year": 2007,
        "tourists": 18000,
        "rating": 8.4
    },
    {
        "№": 6,
        "sight": "Гранд-Каньон",
        "country": "США",
        "city": "Аризона",
        "year": 1979,
        "tourists": 6400,
        "rating": 8.3
    },
    {
        "№": 7,
        "sight": "Парфенон",
        "country": "Греция",
        "city": "Афины",
        "year": 1987,
        "tourists": 28000,
        "rating": 8.2
    },
    {
        "№": 8,
        "sight": "Колизей",
        "country": "Италия",
        "city": "Рим",
        "year": 1980,
        "tourists": 56000,
        "rating": 8.1
    },
    {
        "№": 9,
        "sight": "Большой китайский мур",
        "country": "Китай",
        "city": "Разные",
        "year": 1987,
        "tourists": 102000,
        "rating": 8.0
    },
    {
        "№": 10,
        "sight": "Пирамиды Гизы",
        "country": "Египет",
        "city": "Гиза",
        "year": 1979,
        "tourists": 14000,
        "rating": 9.1
    },
    {
        "№": 11,
        "sight": "Статуя Свободы",
        "country": "США",
        "city": "Нью-Йорк",
        "year": 1984,
        "tourists": 45000,
        "rating": 9.0
    },
    {
        "№": 12,
        "sight": "Акрополь Афинский",
        "country": "Греция",
        "city": "Афины",
        "year": 1987,
        "tourists": 3000,
        "rating": 8.9
    },
    {
        "№": 13,
        "sight": "Эйфелева башня",
        "country": "Франция",
        "city": "Париж",
        "year": 1991,
        "tourists": 6000,
        "rating": 8.8
    },
    {
        "№": 14,
        "sight": "Большой Барьерный Риф",
        "country": "Австралия",
        "city": "Квинсленд",
        "year": 1981,
        "tourists": 2000,
        "rating": 8.7
    },
    {
        "№": 15,
        "sight": "Пирамида Чичен-Ица",
        "country": "Мексика",
        "city": "Юкатан",
        "year": 1988,
        "tourists": 15000,
        "rating": 8.6
    },
    {
        "№": 16,
        "sight": "Стоунхендж",
        "country": "Великобритания",
        "city": "Уилтшир",
        "year": 1986,
        "tourists": 13000,
        "rating": 8.5
    },
    {
        "№": 17,
        "sight": "Ангкор Ват",
        "country": "Камбоджа",
        "city": "Сиемреап",
        "year": 1992,
        "tourists": 23000,
        "rating": 8.4
    },

    {
        "№": 18,
        "sight": "Петра",
        "country": "Иордания",
        "city": "Маан",
        "year": 1985,
        "tourists": 8000,
        "rating": 8.3
    },
    {
        "№": 19,
        "sight": "Собор Святого Базилия",
        "country": "Россия",
        "city": "Москва",
        "year": 1990,
        "tourists": 41000,
        "rating": 8.2
    },
    {
        "№": 20,
        "sight": "Ватикан",
        "country": "Ватикан",
        "city": "Ватикан",
        "year": 1984,
        "tourists": 5000,
        "rating": 8.1
    },
    {
        "№": 21,
        "sight": "Пирамиды Теотиуакана",
        "country": "Мексика",
        "city": "Мехико",
        "year": 1987,
        "tourists": 2000,
        "rating": 8.0
    },

    {
        "№": 22,
        "sight": "Собор Санта-Мария-дель-Фьоре",
        "country": "Италия",
        "city": "Флоренция",
        "year": 1982,
        "tourists": 16000,
        "rating": 7.9
    },
    {
        "№": 23,
        "sight": "Альгамбра",
        "country": "Испания",
        "city": "Гранада",
        "year": 1984,
        "tourists": 23000,
        "rating": 7.8
    },
    {
        "№": 24,
        "sight": "Собор Нотр-Дам",
        "country": "Франция",
        "city": "Париж",
        "year": 1991,
        "tourists": 13000,
        "rating": 7.7
    },
    {
        "№": 25,
        "sight": "Собор Святого Марка",
        "country": "Италия",
        "city": "Венеция",
        "year": 1987,
        "tourists": 3000,
        "rating": 7.6
    },
    {
        "№": 26,
        "sight": "Храм Золотой Пагоды",
        "country": "Мьянма",
        "city": "Янгон",
        "year": 1985,
        "tourists": 1000,
        "rating": 7.5
    },
    {
        "№": 27,
        "sight": "Собор Святого Павла",
        "country": "Великобритания",
        "city": "Лондон",
        "year": 1981,
        "tourists": 18000,
        "rating": 7.4
    },
    {
        "№": 28,
        "sight": "Храм Боробудур",
        "country": "Индонезия",
        "city": "Магеланг",
        "year": 1991,
        "tourists": 12000,
        "rating": 7.3
    },
    {
        "№": 29,
        "sight": "Собор Святого Иоанна Богослова",
        "country": "США",
        "city": "Нью-Йорк",
        "year": 1986,
        "tourists": 21000,
        "rating": 7.2
    },
    {
        "№": 30,
        "sight": "Храм Лотоса",
        "country": "Индия",
        "city": "Дели",
        "year": 1986,
        "tourists": 4000,
        "rating": 7.1
    },
    {
        "№": 31,
        "sight": "Собор Святого Патрика",
        "country": "США",
        "city": "Нью-Йорк",
        "year": 1986,
        "tourists": 5000,
        "rating": 7.0
    },
    {
        "№": 32,
        "sight": "Храм Карнац",
        "country": "Египет",
        "city": "Луксор",
        "year": 1979,
        "tourists": 2000,
        "rating": 6.9
    },
    {
        "№": 33,
        "sight": "Собор Святого Иакова",
        "country": "Испания",
        "city": "Сантьяго-де-Компостела",
        "year": 1985,
        "tourists": 25000,
        "rating": 6.8
    },
    {
        "№": 34,
        "sight": "Храм Храмового города Ангкор",
        "country": "Камбоджа",
        "city": "Сиемреап",
        "year": 1992,
        "tourists": 23000,
        "rating": 6.7
    },
    {
        "№": 35,
        "sight": "Собор Святого Вита",
        "country": "Чехия",
        "city": "Прага",
        "year": 1992,
        "tourists": 13000,
        "rating": 6.6
    },
    {
        "№": 36,
        "sight": "Храм Храмового города Ангкор",
        "country": "Камбоджа",
        "city": "Сиемреап",
        "year": 1992,
        "tourists": 23000,
        "rating": 6.5
    },
    {
        "№": 37,
        "sight": "Собор Святого Вита",
        "country": "Чехия",
        "city": "Прага",
        "year": 1992,
        "tourists": 13000,
        "rating": 6.4
    },
    {
        "№": 38,
        "sight": "Храм Храмового города Ангкор",
        "country": "Камбоджа",
        "city": "Сиемреап",
        "year": 1992,
        "tourists": 23000,
        "rating": 6.3
    },
    {
        "№": 39,
        "sight": "Собор Святого Вита",
        "country": "Чехия",
        "city": "Прага",
        "year": 1997,
        "tourists": 22000,
        "rating": 6.3
    },
    {
        "№": 40,
        "sight": "Мона Лиза",
        "country": "Франция",
        "city": "Париж",
        "year": 1987,
        "tourists": 6000,
        "rating": 8.6
    },

]
