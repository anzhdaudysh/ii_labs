// const API_KEY_1 = '022a1fee-6b12-4937-88d3-89792b13c798';
// // const API_KEY_2 = 'YOUR_API_KEY_2';   
// const url = 'https://api.deepai.org/api/text-generator'; 
// const API_KEY_1 = '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';  // Вставьте ваш API-ключ сюда
// const url1 = 'https://api-inference.huggingface.co/models/gpt2';  // Пример модели

// document.getElementById('submitBtn').addEventListener('click', async () => {
//     const inputText = document.getElementById('inputText').value;

//     const response = await fetch(url1, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${API_KEY_1}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ inputs: inputText })
//     });

//     const data = await response.json();
//     document.getElementById('result1').innerText = data[0].generated_text || 'Ошибка получения результата';
// });


// const API_KEY_2 = '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';  // Вставьте ваш API-ключ сюда
// const url2 = 'https://api-inference.huggingface.co/models//Llama-3.2-1B';  // Пример модели

// document.getElementById('submitBtn').addEventListener('click', async () => {
//     const inputText = document.getElementById('inputText').value;

//     const response = await fetch(url2, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${API_KEY_2}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ inputs: inputText })
//     });

//     const data = await response.json();
//     document.getElementById('result2').innerText = data[0].generated_text || 'Ошибка получения результата';
// });

// document.getElementById('inputText').addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {  // Проверяем, нажата ли клавиша Enter
//         event.preventDefault();  // Предотвращаем стандартное поведение Enter (например, отправку формы)
//         document.getElementById('submitBtn').click();  // Программно "нажимаем" на кнопку
//     }
// });





const API_KEY = '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';  // Вставьте ваш API-ключ сюда
const url1 = 'https://api-inference.huggingface.co/models/gpt2';
const url2 = 'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B';

document.getElementById('submitBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;

    // Первый запрос
    const response1 = await fetch(url1, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: inputText })
    });

    const data1 = await response1.json();
    document.getElementById('result1').innerText = data1[0].generated_text || 'Ошибка получения результата';

    // Второй запрос
    const response2 = await fetch(url2, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: inputText })
    });

    const data2 = await response2.json();
    document.getElementById('result2').innerText = data2[0].generated_text || 'Ошибка получения результата';
});





    // Заглушки для функций
    // function func1(text) {
    //     return `Результат первой функции: ${text}`;
    // }

    // function func2(text) {
    //     return `Результат второй функции: ${text}`;
    // }

    // Функция обработки нажатия кнопки "push"
    // async function processText() {
    //     const inputText = document.getElementById('inputText').value;
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Api-Key': apiKey,
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ text: inputText })
    //     });
    
    //     const data = await response.json();
    //     document.getElementById('result').innerText = result1 || 'Ошибка получения результата';
        // const result1 = await translateText(inputText);
        // const result2 = func2(inputText);

        // document.getElementById('result1').innerText = result1;
        // document.getElementById('result2').innerText = result2;
    // }

    // Пример API ключей (вставьте ваши ключи)


 // URL для генерации текста

// document.getElementById('submitBtn').addEventListener('click', async () => {
//     const inputText = document.getElementById('inputText').value;

//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Api-Key': apiKey,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: inputText })
//     });

//     const data = await response.json();
//     document.getElementById('result').innerText = data.output || 'Ошибка получения результата';
// });

// // Функция для запроса к первому API
// async function fetchFromApi1(text) {
//     const url = `https://api1.example.com/translate?text=${text}&key=${API_KEY_1}`;
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data.translation;  // Допустим, перевод возвращается в поле 'translation'
//     } catch (error) {
//         console.error("Error fetching from API 1", error);
//         return "Error fetching translation from API 1";
//     }
// }

// // Функция для запроса ко второму API
// async function fetchFromApi2(text) {
//     const url = `https://api2.example.com/translate?text=${text}&key=${API_KEY_2}`;
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data.translation;  // Допустим, перевод возвращается в поле 'translation'
//     } catch (error) {
//         console.error("Error fetching from API 2", error);
//         return "Error fetching translation from API 2";
//     }
// }

// // Функция для отображения данных на странице
// async function displayResults() {
//     const text = "Hello, world!";
//     const translation1 = await fetchFromApi1(text);
//     const translation2 = await fetchFromApi2(text);

//     // Выводим переводы на страницу
//     document.getElementById("result1").innerText = translation1;
//     document.getElementById("result2").innerText = translation2;

//     // Анализ сравнения
//     let analysis = (translation1 === translation2) ? "Both translations are identical." : "Translations are different.";
//     document.getElementById("analysis").innerText = analysis;
// }


// const url = 'https://libretranslate.de/translate';  // Публичный эндпоинт LibreTranslate
// const text = 'Hello, world!';

// async function translateText(text) {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             q: text, // Текст, который нужно перевести
//             source: 'en', // Исходный язык
//             target: 'ru', // Целевой язык
//             format: 'text' // Формат текста (текст)
//         })
//     });
//     const data = await response.json();
//     return data.translatedText;  // Возвращаем переведенный текст
// }

// translateText(text).then(translatedText => {
//     console.log('Translated text:', translatedText);  // Вывод переведенного текста
// });


// // Вызываем функцию при загрузке страницы
// window.onload = displayResults;
