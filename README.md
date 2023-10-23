# Тестовое задание

Реализовать одностраничное приложение (SPA) для просмотра информации сервиса с возможностью авторизации.

## Требования

Приложение должно состоять из следующих страниц:

1. `/` - главная страница.
2. `/login` - страница авторизации.
3. `/browse` - страница для просмотра информации сервиса.

В приложении реализовать навигацию:

1. На главную (`/`).
2. Просмотр (`/browse`).

В приложении реализовать вывод кнопки для прохождения авторизации (Войти / Выйти).

Для запросов информации и авторизации реализовать "фейковый" асинхронный функциюнал без реализации серверной части.

Информацию об авторизации пользователя можно сохранять в ``localStorage``.

## Требования к страницам

**Главная**

Главная страница является публичной, доступной как авторизованным, так и неавторизованным пользователям. На ней располагается навигация и любая другая информация которую посчитаете нужной.

**Страница авторизации**

Страница авторизации доступна только если пользователь не авторизован. Если авторизованный пользователь попытается перейти по адресу `/login`, то происходит редирект на главную.

При успешной авторизации происходит редирект на главную.

**Страница для просмотра информации сервиса**

Является приватной. Если пользователь попытается на нее перейти, произвести редирект на страницу авторизации.

На данной странице реализовать вывод приведенной ниже информации в виде:

1. В левой части ввывести древовидную структуру, содержащую только родительские элементы с возможностью выбора.
2. В правой части вывести список дочерних элементов выбранного родителя. Реализовать поиск и сортировку по имени.