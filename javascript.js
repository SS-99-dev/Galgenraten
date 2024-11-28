body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        h1 {
            font-size: 2.5rem;
            color: #444;
        }

        #container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 600px;
            text-align: center;
        }

        #image img {
            width: 100%;
            max-width: 200px;
            margin: 20px 0;
        }

        input[type="password"], input[type="text"] {
            width: 90%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
            outline: none;
        }

        button {
            padding: 10px 20px;
            font-size: 1rem;
            color: #fff;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }

        #hidden-word {
            font-size: 2rem;
            margin: 20px 0;
            letter-spacing: 8px;
        }

        .hidden-letter {
            display: inline-block;
            width: 20px;
            text-align: center;
            border-bottom: 2px solid #ccc;
        }

        #wrong-letters {
            margin-top: 20px;
            color: #d9534f;
            font-weight: bold;
        }

        #result-message {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: #444;
        }
