import React from 'react';
import ReactDOM from 'react-dom';
import TableComponent from './TableComponent';

const data = [
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
];

const App = () => (
  <div>
    <TableComponent data={data} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;