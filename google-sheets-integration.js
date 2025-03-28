// This file contains the code for Google Apps Script to connect the form to Google Sheets
// You'll need to create a Google Apps Script project and deploy it as a web app

/**
 * Google Apps Script code to be deployed as a web app
 * This will handle form submissions and add them to a Google Sheet
 */

/*
// Copy this code to a new Google Apps Script project

const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Form Responses'; // Name of the sheet tab

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet and get the sheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add headers
      sheet.appendRow([
        'Timestamp', 
        'Name', 
        'Email', 
        'Phone', 
        'Company', 
        'Designation', 
        'Consent'
      ]);
    }
    
    // Append the form data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.company,
      data.designation,
      data.consent
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// This function is needed to test the web app
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ 'status': 'online' }))
    .setMimeType(ContentService.MimeType.JSON);
}
*/

