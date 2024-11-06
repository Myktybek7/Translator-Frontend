const dictionary = {
    "hello": "здравствуйте",
    "world": "мир",
    "friend": "друг",
    "good": "хорошо",
    "day": "день",
    "night": "ночь",
    "love": "любовь",
    "peace": "мир",
    "cat": "кот",
    "dog": "собака",
    "water": "вода",
    "fire": "огонь",
    "earth": "земля",
    "wind": "ветер",
    "sun": "солнце",
    "moon": "луна",
    "tree": "дерево",
    "flower": "цветок",
    "book": "книга",
    "computer": "компьютер"
};

let favorites = [];

function translateWord() {
    const word = document.getElementById("wordInput").value.trim();
    setTimeout(() => {
        const translation = dictionary[word.toLowerCase()];
        if (translation) {
            document.getElementById("translationResult").innerText = translation;
            document.getElementById("saveButton").disabled = false;
        } else {
            document.getElementById("translationResult").innerText = "Перевод не найден";
            document.getElementById("saveButton").disabled = true;
        }
    }, 1000);
}