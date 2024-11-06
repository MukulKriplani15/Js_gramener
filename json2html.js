export default function json2html(data) {
    // Get all unique keys across objects for column headers
    const columns = [...new Set(data.flatMap(Object.keys))];

    // Start building the HTML table as a string
    let html = '<table data-user="mukulkriplani09@gmail.com">';
    html += "<thead><tr>";
    
    // Add each column header
    columns.forEach(col => {
        html += `<th>${col}</th>`;
    });
    html += "</tr></thead><tbody>";

    // Add table rows for each data object
    data.forEach(row => {
        html += "<tr>";
        columns.forEach(col => {
            html += `<td>${row[col] || ""}</td>`; // Empty cell if key is missing
        });
        html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}
