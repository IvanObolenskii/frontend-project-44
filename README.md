### Hexlet tests and linter status:
[![Actions Status](https://github.com/IvanObolenskii/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/IvanObolenskii/frontend-project-44/actions)

### Code Climate maintainability status:
[![Maintainability](https://api.codeclimate.com/v1/badges/98e8339401a95d9e9972/maintainability)](https://codeclimate.com/github/IvanObolenskii/frontend-project-44/maintainability)

# Brain Games

## Описание проекта

Brain Games — это набор мини-игр, запускаемых из консоли. Каждая игра представляет собой логическую задачку, которую нужно решить. Игры помогают улучшить математические и логические навыки в увлекательной форме.

## Структура проекта

- `bin/`: Папка с исполняемыми файлами игр.
- `src/`: Исходный код игр.
    - `games/`: Модули каждой игры.
    - `index.js`: Основной модуль для запуска игр.
    - `cli.js`: Модуль для работы с командной строкой.

## Минимальные требования

Для работы Brain Games требуется:

- Node.js — версия 12 или выше.

## Инструкции по установке и запуску

Чтобы установить и запустить игры, выполните следующие шаги:

1. Установите Node.js, если он еще не установлен на вашем компьютере.
2. Откройте терминал и клонируйте репозиторий проекта, используя следующую команду:
   ```bash
   git clone https://github.com/IvanObolenskii/frontend-project-44.git
   ```
3. Перейдите в папку склонированного проекта:
   ```bash
   cd frontend-project-44
   ```
4. Выполните установку зависимостей:
   ```bash
   npm install
   ```
5. Установите игры глобально на вашем компьютере:
   ```bash
   npm link
   ```

## Запуск игр

Каждая игра запускается своей командой. Ниже приведены команды для каждой игры и примеры их работы.

### Приветствие

Команда: `brain-games`

![Приветствие](https://storage.yandexcloud.net/custompic/brain-games/brain-games.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEB2B8XZoXWpA75Qc9xsgA%2F20240119%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20240119T195314Z&X-Amz-Expires=2592000&X-Amz-Signature=78D9353109BD0009889725CBEBA7681990EC9796D040EF212A017FACB749B008&X-Amz-SignedHeaders=host)

### Игра "Проверка на чётность"

Команда: `brain-even`

![brain-even](https://storage.yandexcloud.net/custompic/brain-games/brain-even.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEB2B8XZoXWpA75Qc9xsgA%2F20240119%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20240119T195341Z&X-Amz-Expires=2592000&X-Amz-Signature=01E5B0409983D1A50206FB29FC095BF68F00E37CE2A67BA0DA45680E8139E5CA&X-Amz-SignedHeaders=host)

### Игра "Калькулятор"

Команда: `brain-calc`

![brain-calc](https://storage.yandexcloud.net/custompic/brain-games/brain-calc.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEB2B8XZoXWpA75Qc9xsgA%2F20240119%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20240119T195403Z&X-Amz-Expires=2592000&X-Amz-Signature=396E0C8683B2290310080254CDAAFD546CE529D2F83B6A6E3ABD278C5A62A18C&X-Amz-SignedHeaders=host)

### Игра "Наибольший общий делитель"

Команда: `brain-gcd`

![brain-gcd](https://storage.yandexcloud.net/custompic/brain-games/brain-gcd.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEB2B8XZoXWpA75Qc9xsgA%2F20240119%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20240119T195422Z&X-Amz-Expires=2592000&X-Amz-Signature=2647BB50C2AD5BFB6A44F245E73C2E5931A0E73BDD7D0694C20C3AB6FA46CC52&X-Amz-SignedHeaders=host)

### Игра "Арифметическая прогрессия"

Команда: `brain-progression`

![brain-progression](https://storage.yandexcloud.net/custompic/brain-games/brain-progression.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEB2B8XZoXWpA75Qc9xsgA%2F20240119%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20240119T195441Z&X-Amz-Expires=2592000&X-Amz-Signature=453EA003CF59EE4E342A4B95CA322A510225E75784AF62C16FE9D204911486FA&X-Amz-SignedHeaders=host)

### Игра "Простое ли число?"

Команда: `brain-prime`

![brain-prime](https://storage.yandexcloud.net/custompic/brain-games/brain-prime.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEB2B8XZoXWpA75Qc9xsgA%2F20240119%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20240119T195457Z&X-Amz-Expires=2592000&X-Amz-Signature=270CCC92B37BB489F4A020BB21EEBD7FA0A635B8C00355E9B94A7082A9F2524E&X-Amz-SignedHeaders=host)