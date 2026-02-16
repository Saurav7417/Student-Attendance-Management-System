Student Attendance Management

link - 

Simple web-based attendance tracker (vanilla JavaScript, HTML, CSS) for adding, editing, deleting students and marking daily attendance.

Features

Add Student: Add a student name to the list.
Edit Student: Rename an existing student.
Delete Student: Remove a student.
Mark Attendance: Mark Present/Absent (buttons).
Percentage: Attendance % calculated dynamically.
Defaulters: Auto list of students below 75% attendance.
Persistence: Data stored in browser localStorage.
Files

index.html — UI and structure
script.js — App logic and localStorage persistence
style.css — Styles
How to run

Open index.html in your browser (double-click or drag into browser).
Or serve from a simple HTTP server for best results:

# Python 3
python -m http.server 8000
# or (if installed)
npx http-server

Then open http://localhost:8000 in your browser.

Notes

Data is saved in the browser only (clear via DevTools → Application → Local Storage).
Suggestions: CSV import/export, backup/restore, or prettier UI — I can add these if you want.
License

Use freely; attribute if you publish.
