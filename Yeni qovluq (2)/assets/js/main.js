function symbolCounter(text) {
    for (let i = 0; i < text.length; i++) {
        let count = 0;
        for (let j = 0; j < text.length; j++) {
            if (text[i] == text[j] && i > j) {
                break;
            }
            if (text[i] == text[j]) {
                count++;
            }
        }
        if (count > 0) {
            console.log(`${text[i]} : ${count}`);
        }
    }
}
symbolCounter("Kamran")

