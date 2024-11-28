let wordToGuess = "";
        let displayedWord = [];
        let wrongGuesses = 0;
        const maxWrongGuesses = 8;
        let guessedLetters = [];

        }
        function startGame() {
            wordToGuess = document.getElementById("wordInput").value.toLowerCase();
            displayedWord = Array(wordToGuess.length).fill("_");
            wrongGuesses = 0;
            guessedLetters = [];
            document.getElementById("wordDisplay").textContent = displayedWord.join(" ");
            document.getElementById("wrongAttempts").textContent = wrongGuesses;
            document.getElementById("message").textContent = "";

            document.getElementById("gameArea").style.display = "block";
            document.getElementById("startArea").style.display = "none";
            document.getElementById("wordInput").value = "";
            document.getElementById("hangmanImage").src = "img/gr-0.jpg";
            document.getElementById("extraImage").style.display = "none";
            document.getElementById("restartButton").style.display = "none";

            // Verstecktes Eingabefeld fokussieren, um virtuelle Tastatur zu öffnen
            document.getElementById("hiddenInput").focus();
        }

        function focusInput() {
            setTimeout(() => document.getElementById("hiddenInput").focus(), 50);
        }

        document.addEventListener("keydown", function(event) {
            if (event.key == "Enter") startGame();
            const letter = event.key.toLowerCase();
            if (/^[a-z]$/.test(letter) && wordToGuess) {
                if (guessedLetters.includes(letter)) {
                    document.getElementById("message").textContent = `Der Buchstabe "${letter}" wurde bereits geraten.`;
                } else {
                    guessedLetters.push(letter);
                    checkGuess(letter);
                }
            }
        });

        function checkGuess(letter) {
            let correctGuess = false;
            for (let i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] === letter) {
                    displayedWord[i] = letter;
                    correctGuess = true;
                }
            }

            if (correctGuess) {
                document.getElementById("wordDisplay").textContent = displayedWord.join(" ");
                document.getElementById("message").textContent = "";
                checkWin();
            } else {
                wrongGuesses++;
                document.getElementById("wrongAttempts").textContent = wrongGuesses;
                document.getElementById("message").textContent = `Der Buchstabe "${letter}" ist nicht im Wort.`;
                document.getElementById("hangmanImage").src = `img/gr-${wrongGuesses}.jpg`;
                checkLoss();
            }
        }

        function checkWin() {
            if (displayedWord.join("") === wordToGuess) {
                document.getElementById("message").textContent = "Herzlichen Glückwunsch, du hast gewonnen!";
                document.getElementById("gameArea").style.display = "none";
                document.getElementById("restartButton").style.display = "block";
                document.getElementById("extraImageDisplay").src = "img/gewonnen.jpg";
                document.getElementById("extraImage").style.display = "block";
                document.getElementById("endMessage").textContent = "Gewonnen";
                document.getElementById("endMessage").style.display = "block";
            }
        }

        function checkLoss() {
            if (wrongGuesses >= maxWrongGuesses) {
                document.getElementById("message").textContent = `Du hast verloren! Das Wort war "${wordToGuess}".`;
                document.getElementById("gameArea").style.display = "none";
                document.getElementById("restartButton").style.display = "block";
                document.getElementById("extraImageDisplay").src = "img/gr-8.jpg";
                document.getElementById("extraImage").style.display = "block";
                document.getElementById("endMessage").textContent = 'Verloren! Das Wort war"${wordToGuess}".';
                document.getElementById("endMessage").style.display = "block";
            }
        }

        function restartGame() {
            document.getElementById("startArea").style.display = "block";
            document.getElementById("gameArea").style.display = "none";
            document.getElementById("restartButton").style.display = "none";
            document.getElementById("extraImage").style.display = "none";
            document.getElementById("message").textContent = "";
            document.getElementById("endMessage").style.display = "none";
        }
