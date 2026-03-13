# Developer Resume Website

A responsive personal resume and portfolio website built with HTML, CSS, and JavaScript.
This project provides a clean, professional interface optimized for recruiters, AI resume parsers, and Applicant Tracking Systems (ATS).

The site also supports **automatic PDF generation**, allowing the resume to be downloaded instantly for job applications.

---

## Overview

This project was created to provide a lightweight and portable resume system that can:

* Present professional experience online
* Generate a downloadable PDF resume
* Maintain ATS-friendly formatting
* Work without a backend or database
* Run locally or be deployed on any static hosting service

---

## Features

* Responsive layout
* Clean developer-oriented design
* Print-optimized CSS for resume export
* Automatic PDF resume generation
* Lightweight static implementation
* Compatible with AI recruiting systems

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Bootstrap
* html2pdf.js (for resume export)

---

## Project Structure

```
project/
│
├── index.html
├── README.md
│
├── css/
│   ├── styles.css
│   └── print.css
│
├── js/
│   └── scripts.js
│
├── assets/
│   ├── img/
│   └── icons/
│
└── resume/
    └── resume.pdf
```

---

## Installation

Clone the repository:

```
git clone https://github.com/yourusername/resume-site.git
```

Navigate to the project folder:

```
cd resume-site
```

Open the project locally:

```
open index.html
```

Or run a local server if preferred.

---

## Generating the Resume PDF

The site includes a button that triggers automatic resume generation using `html2pdf.js`.

Example function:

```javascript
function downloadResume() {
  const element = document.querySelector(".container-fluid");

  const options = {
    margin: 0.3,
    filename: "resume.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };

  html2pdf().set(options).from(element).save();
}
```

---

## Print Optimization

A dedicated stylesheet is included to improve resume exports.

```
css/print.css
```

This stylesheet:

* Removes navigation elements
* Adjusts spacing for readability
* Prevents section breaks across pages
* Ensures clean black-and-white printing

---

## Deployment

This project can be deployed to any static hosting provider such as:

* GitHub Pages
* Netlify
* Vercel
* AWS S3

Because the site does not rely on a backend, deployment is straightforward.

---

## Author

Juan David Correa
Software Developer

---

## License

This project is provided for personal and professional portfolio use.
