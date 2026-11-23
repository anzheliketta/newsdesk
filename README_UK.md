# NewsDesk для Cloudflare Workers + D1

## Важливо
Це версія саме для Cloudflare Workers. Не розгортайте старий ZIP для Render і не використовуйте стару конфігурацію Vercel.

## Перед розгортанням
1. У Cloudflare відкрий Workers & Pages → D1 SQL Database → Create database.
2. Назва бази: `newsdesk-db`.
3. Скопіюй Database ID.
4. Відкрий `wrangler.jsonc` і заміни `PASTE_D1_DATABASE_ID_HERE` на справжній ID.
5. У D1 відкрий вкладку Console та виконай увесь SQL із `schema.sql`.

## GitHub
Заміни вміст репозиторію `newsdesk` файлами з цього ZIP (папки `src`, `public`, а також `package.json`, `wrangler.jsonc`, `schema.sql`, `sources.json`).

## Cloudflare deployment
У формі імпорту GitHub:
- Build command: `npm install`
- Deploy command: `npx wrangler deploy`
- Preview command: залиш порожнім
- Root directory: `/`

Перед натисканням Deploy переконайся, що D1 ID вже внесений і схема створена.

## Межі та чесні очікування
- Cron налаштований на кожну хвилину.
- Telegram читається з публічних вебпрев'ю `t.me/s/<channel>` без входу в особистий акаунт. Telegram може обмежувати або блокувати автоматичні запити; помилки буде видно у статусі джерела.
- RSS для сайтів визначається з HTML, якщо сайт публікує RSS/Atom link. Якщо не знайдено, джерело залишиться без моніторингу, доки не додати точний RSS URL.
- Facebook — швидке посилання; автоматичний моніторинг потребує Meta API permissions.
- Безкоштовний тариф має ліміти CPU/запитів. Якщо один Cron запуск не вкладається у ліміти при перевірці всіх джерел, треба буде розподілити перевірки між кількома хвилинами або перейти на платний план.
- Перший успішний прохід кожного джерела створює базову точку і не позначає старі публікації як нові.
