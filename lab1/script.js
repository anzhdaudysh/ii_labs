
const API_KEY = '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';  
const url1 = 'https://api-inference.huggingface.co/models/gpt2';
const url2 = 'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B';

document.getElementById('submitBtn').addEventListener('click', async () => { // Обработчики для кнопки Push
    const inputText = document.getElementById('inputText').value;

    // отправляем запрос на Hugging Face
    /* 
    parameters:
        - request : str
        - max_length          - Ограничение длины ответа
        - temperature         - Контроль креативности
        - top_p: 0.9,         - Ширина выборки возможных слов
        - repetition_penalty: - Штраф за повторения

    returns: 
        - response : str
        */
    const response1 = await fetch(url1, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputs: inputText,
            parameters: {
                max_length: 50,  
                temperature: 0.7,  
                top_p: 0.9,  
                repetition_penalty: 1.2,  
            }
        })
    });

    const data1 = await response1.json();    // Преобразуем ответ от API в формат JSON. Эта команда ожидает пока ответ будет получен и преобразован в формат JSON.
    document.getElementById('result1').innerText = data1[0].generated_text || 'Ошибка получения результата';
    // Из JSON берем первое значение массива и выводим поле "generated_text". 
    // Если этого текста нет или произошла ошибка, выводим сообщение "Ошибка получения результата" вместо текста.
   

    const response2 = await fetch(url2, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputs: inputText,
            parameters: {
                max_length: 50,  
                temperature: 0.7,  
                top_p: 0.9,  
                repetition_penalty: 1.2,  
            }
        })
    });

    const data2 = await response2.json();
    document.getElementById('result2').innerText = data2[0].generated_text || 'Ошибка получения результата';
});


// Объект для хранения результатов голосования
let pollResults = {
    vote1: 0,  
    vote2: 0   
};

// Обработчики для кнопок голосования
document.getElementById('vote1').addEventListener('click', () => {
    pollResults.vote1 += 1;  
    updatePollResults();  // Обновляем результат на экране
});

document.getElementById('vote2').addEventListener('click', () => {
    pollResults.vote2 += 1;  
    updatePollResults();  
});

function updatePollResults() {
    // Показываем результаты голосования
    document.getElementById('pollResult').innerText = `Результаты голосования:
    Первый запрос: ${pollResults.vote1} голосов, Второй запрос: ${pollResults.vote2} голосов`;

    // Сохраняем в формате JSON
    const pollJSON = JSON.stringify(pollResults);
    console.log("Сохраненные результаты в формате JSON:", pollJSON);
}


function updatePollResults() {
    document.getElementById('pollResult').innerText = `Результаты голосования:
    Первый запрос: ${pollResults.vote1} голосов, Второй запрос: ${pollResults.vote2} голосов`;

    // Сохраняем результат голосования в формате JSON в localStorage
    const pollJSON = JSON.stringify(pollResults);
    localStorage.setItem('pollResults', pollJSON);
    console.log("Результаты сохранены в localStorage");
}


const savedPollResults = JSON.parse(localStorage.getItem('pollResults'));
console.log(savedPollResults);

