# Setup Instructions for Social Share Content Page

Follow these steps to set up and deploy the Social Share Content Page for your Startup Mahakumbh event.

## Files Overview

- `index.html` - The main form page
- `success.html` - The social sharing page that appears after form submission
- `styles.css` - Styling for both pages
- `script.js` - JavaScript for the form page
- `share-script.js` - JavaScript for the social sharing page
- `google-sheets-integration.js` - Contains the Google Apps Script code for Google Sheets integration

## Step 1: Set Up Google Sheets Integration

1. Create a new Google Sheet to store form responses
2. Go to Extensions > Apps Script
3. Delete any code in the editor and paste the code from `google-sheets-integration.js`
4. Replace `YOUR_GOOGLE_SHEET_ID` with your actual Google Sheet ID (found in the URL of your sheet)
5. Save the project with a name like "Startup Mahakumbh Form"
6. Deploy the script as a web app:
   - Click "Deploy" > "New deployment"
   - Select type: "Web app"
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
   - Copy the web app URL that is generated

## Step 2: Update the Form Submission Code

1. Open `script.js`
2. Find the `sendToGoogleSheets` function
3. Uncomment the fetch code block
4. Replace `YOUR_GOOGLE_SCRIPT_URL` with the web app URL you copied in Step 1

## Step 3: Host the Website

You can host this website on any web hosting service. Here are a few options:

### Option 1: GitHub Pages (Free)

1. Create a new GitHub repository
2. Upload all the files to the repository
3. Go to Settings > Pages
4. Select the main branch as the source
5. Click Save
6. Your site will be published at `https://yourusername.github.io/repository-name`

### Option 2: Vercel or Netlify (Free)

1. Create an account on Vercel or Netlify
2. Connect your GitHub repository
3. The site will be automatically deployed

### Option 3: Traditional Web Hosting

1. Upload all files to your web hosting service via FTP
2. Make sure the files are in the public_html or www directory

## Step 4: Test the Form

1. Open the website in your browser
2. Fill out the form and submit it
3. Verify that the data appears in your Google Sheet
4. Test the social sharing functionality on the success page

## Step 5: Customize (Optional)

You can customize the following elements:

- Colors: Edit the CSS variables in `styles.css`
- Logo: Add your logo to the header
- Message templates: Edit the templates array in `share-script.js`
- Form fields: Add or remove fields in `index.html` and update the JavaScript accordingly

## Troubleshooting

### Form Submission Issues

- Check the browser console for errors
- Verify that your Google Apps Script is deployed correctly
- Make sure the Google Sheet ID is correct

### Social Sharing Issues

- Some platforms (like LinkedIn and Instagram) have limitations on what can be shared programmatically
- Test each platform individually to ensure they work as expected

## Need Help?

If you encounter any issues or need assistance, please contact your developer for support.

