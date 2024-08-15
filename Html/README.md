# Login App

## Figma
https://www.figma.com/design/t7u1jnC7VnFfn35j13yi9o/My-App?node-id=0-1&t=dKLReZuqrNL2DkNm-1

## Overview
LOGIN-APP is a simple login page built with HTML, CSS, and JavaScript. It provides a responsive login form with validation for username and password inputs. The application has styling and layout optimized for various screen sizes.

## Features
- Responsive Design: The layout adapts to different screen sizes using media queries.
- Form Validation: JavaScript validation ensures that both username and password are provided. It also checks credentials and displays appropriate error or success messages.
- Styling: Modern design using Google Fonts and CSS variables for easy theme management.

## File Structure
- index.html: The main HTML file containing the structure of the login page.
- Styles.css: The stylesheet for styling the login page.

## Usage
1. ### HTML File (index.html)
     - This file contains the structure of the login form, including the input fields for username and password, a submit button, and areas for displaying error messages.
3. ### CSS File (Styles.css)
    - This file contains styles to make the login form look modern and responsive. It uses CSS variables for easier theme adjustments and media queries to ensure proper display on various devices.
5. ### JavaScript Validation
   - The JavaScript code, included within the HTML file, provides client-side validation. It checks for empty fields, and whether the credentials are correct, and displays appropriate messages.

## Code Breakdown
### HTML
- `<form id="login-form">`: The form element where users input their credentials.
- `<input id="login-username"> and <input id="login-password">`: Input fields for username and password.
- `<div id="form-error">`: A div element to display error or success messages.
### CSS
- `@import`: Imports the Roboto font from Google Fonts.
- `:root`: Defines CSS variables for consistent theming.
- `.layout-container`: Grid container for layout sections.
- `.login-box`: Centered login form with styling for form elements.
- `Media Queries`: Adjustments for responsiveness across different screen sizes.
### JavaScript
- Event Listener: Adds functionality to the form submission to validate inputs and display appropriate messages.
- Validation Logic: Ensures that both fields are filled and checks for specific credentials

## Installation
No installation is required. Simply open index.html in a web browser to view the login page.

## Customization
- Styling: Modify the `Styles.css` file to change the appearance.
- Validation: Update the JavaScript code to change the validation logic or credentials.

## Contributing
Feel free to fork the repository and submit pull requests with improvements or bug fixes. For major changes, please open an issue to discuss your proposed changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
