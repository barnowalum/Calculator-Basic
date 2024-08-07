body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0px;
    margin: auto;
    background-color: #333;
    font-family: Arial, sans-serif;
}

.calculator {
    background-color: #333;
    padding: 10px;
    width: 100%;
    margin: auto;
}

#display {
    width: calc(100% - 10px);
    height: 100px;
    font-size: 2em;
    text-align: right;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    border: none;
    background-color: #444;
    color: white;
    border-radius: 5px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 30px 0;
}

button {
    font-size: 1.5em;
    padding: 20px 10px;
    border: none;
    border-radius: 5px;
    background-color: #555;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #777;
}

.operator {
    background-color: #f44336; /* red */
}

.eql {
    grid-column: span 2;
}

.zero {
    padding:10px;
    grid-column: span 2;
}

.clear {
    grid-column: span 2;
}
