document.getElementById('csvFileInput').addEventListener('change', readFile);

let csvData = [];
let headers = [];

function readFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        parseCSV(text);
    };
    reader.readAsText(file);
}

function parseCSV(text) {
    const lines = text.split('\n');
    headers = lines[0].split(',');
    
    csvData = lines.slice(1).map(line => {
        const values = line.split(',');
        return headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
    });

    displayOptions();
}

function displayOptions() {
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';

    headers.forEach(header => {
        const button = document.createElement('button');
        button.innerText = 'Sort by ' + header;
        button.onclick = () => sortCSV(header);
        container.appendChild(button);
    });
}

function sortCSV(sortBy) {
    csvData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    let sortedCSVText = headers.join(',') + '\n';
    sortedCSVText += csvData.map(row => headers.map(header => row[header]).join(',')).join('\n');
    
    downloadCSV(sortedCSVText);
}

function downloadCSV(csvText) {
    const blob = new Blob([csvText], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "sorted.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
