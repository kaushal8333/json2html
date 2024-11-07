// json2html.js

export default function json2html(data) {
    // Initialize the table with the "data-user" attribute
    let html = `<table data-user="krishnakaushald09@gmail.com">
      <thead>
        <tr>`;
  
    // Get the unique keys across all objects in the array for column headers
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Create table headers
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
  
    html += `</tr>
      </thead>
      <tbody>`;
  
    // Populate rows of the table with data
    data.forEach(row => {
      html += "<tr>";
      headers.forEach(header => {
        html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
      });
      html += "</tr>";
    });
  
    html += `
      </tbody>
    </table>`;
  
    return html;
  }
  