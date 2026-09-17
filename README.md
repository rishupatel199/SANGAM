# SANGAM — Tech Community LinkedIn Hub

A responsive, static website for organizing teammate LinkedIn profiles into four groups.

## Run
Open `index.html` directly in a browser, or use VS Code Live Server.

## Add your real members
Open `app.js` and edit the `groups` array.

Example:
```js
{
  name: "AI / ML",
  description: "Machine learning, AI & research",
  logo: "assets/group-1.png",
  members: [
    {
      name: "Your Name",
      role: "CSE / AI",
      linkedin: "https://www.linkedin.com/in/your-profile/"
    }
  ]
}
```

## Customize
- Rename Group One–Four.
- Replace member names and roles.
- Paste each member's real LinkedIn URL.
- Replace `assets/group-1.png` etc. with your final group logos if needed.
- Colors and spacing are in `styles.css`.

## Design
Cream paper background, black typography, orange accent, glitch-inspired SANGAM treatment, subtle grain, sticky navigation, expandable group cards, search, and scroll parallax.

## Profiles spreadsheet
The supplied `profiles.xlsx` has been used to populate the site. It contains:
- Dev Growth — 14 members
- Code Club — 3 members

Two additional group cards are retained as placeholders because no member data for those groups was present in the spreadsheet.
