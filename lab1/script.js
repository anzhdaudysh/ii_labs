
const API_KEY = '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';  
const url1 = 'https://api-inference.huggingface.co/models/gpt2';
const url2 = 'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B';

document.getElementById('submitBtn').addEventListener('click', async () => {
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

    const data1 = await response1.json();
    document.getElementById('result1').innerText = data1[0].generated_text || 'Ошибка получения результата';


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



