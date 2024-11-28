        let word = '';
        let hiddenWord = [];
        let wrongLetters = [];
        let maxAttempts = 8;
        let attempts = 0;

        function startGame() {
            word = document.getElementById('word-input').value.toLowerCase();
            if (!word) {
                alert('Bitte ein Wort eingeben!');
                return;
            }

            hiddenWord = Array(word.length).fill('_');
            document.getElementById('hidden-word').innerHTML = hiddenWord
                .map(letter => `<span class="hidden-letter">${letter}</span>`)
                .join('');
            document.getElementById('setup-area').style.display = 'none';
            document.getElementById('game-area').style.display = 'block';
        }

        document.getElementById('letter-input').addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                    guessLetter();
            }
        });

        function guessLetter() {
            const input = document.getElementById('letter-input');
            const guessedLetter = input.value.toLowerCase();
            input.value = '';

            if (!guessedLetter || guessedLetter.length !== 1 || !/[a-zäöü]/.test(guessedLetter)) {
                alert('Bitte einen gültigen Buchstaben eingeben!');
                return;
            }

            if (word.includes(guessedLetter)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === guessedLetter) {
                        hiddenWord[i] = guessedLetter;
                    }
                }
            } else if (!wrongLetters.includes(guessedLetter)) {
                wrongLetters.push(guessedLetter);
                attempts++;
                document.getElementById('wrong-letters').textContent = wrongLetters.join(', ');
                document.getElementById('hangman-image').src = `/img/gr-${attempts}.png`;
            }

            document.getElementById('hidden-word').innerHTML = hiddenWord
                .map(letter => `<span class="hidden-letter">${letter}</span>`)
                .join('');

            if (!hiddenWord.includes('_')) {
                endGame(true);
            } else if (attempts === maxAttempts) {
                endGame(false);
            }
        }

        function endGame(won) {
            document.getElementById('game-area').style.display = 'none';
            document.getElementById('result-area').style.display = 'block';

                if (won) {
                        document.getElementById('result-message').textContent = 'Du hast gewonnen!';
                        document.getElementById('hangman-image').src = '/img/gewonnen.jpg';
                } else {
                        document.getElementById('result-message').textContent = `Du hast verloren!
                        Das Wort war: "${word}".`;
                        document.getElementById('hangman-image').src = '/img/gr-8.png';
                }
        }

        function restartGame() {
            word = '';
            hiddenWord = [];
            wrongLetters = [];
            attempts = 0;
            document.getElementById('word-input').value = '';
            document.getElementById('hidden-word').innerHTML = '';
            document.getElementById('wrong-letters').textContent = '';
            document.getElementById('hangman-image').src = '/img/gr-8.png';
            document.getElementById('setup-area').style.display = 'block';
            document.getElementById('game-area').style.display = 'none';
            document.getElementById('result-area').style.display = 'none';
        }
