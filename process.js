
var process = (() => {

    async function generateWord(wordLength){
        try {
            const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.error('There was a problem getting a word:', error);
            throw error; 
        }
    }

    async function dictionaryCheck(word){
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if(data[0]){
                return true;
            }
        } catch (error) {
            console.error('There was a problem getting dictionary entry:', error);
            return false;
        }
    }


    return {
        generateWord,
        dictionaryCheck,
    };
  })();
