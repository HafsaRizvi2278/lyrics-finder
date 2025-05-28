# 🎵 Lyrics Finder

**Lyrics Finder** is a visually polished, responsive web app that lets users search for any song by artist or title and instantly view its lyrics. Designed with minimalism and user experience in mind, it uses **Vanilla JavaScript**, **HTML5**, and **CSS3** — no frameworks or backend setup required.

> 🎨 Built for music lovers. Designed like a designer.

---

## 🚀 Features

- 🔍 **Instant search** by artist or song title  
- 📜 **Real-time lyrics** via the [Lyrics.ovh API](https://lyrics.ovh)  
- 🌑 **Dark mode UI** for a sleek, immersive experience  
- 🌀 **Smooth UX** with loading indicators and error handling  
- 📱 **Fully responsive** for mobile, tablet, and desktop  

---

## 🖼️ Screenshots

![Lyrics Finder Screenshot](https://github.com/user-attachments/assets/89bd2282-430c-4c08-a239-2f1096feaca8)


---

## 🛠️ Tech Stack

| Frontend | Tools & API |
|----------|-------------|
| **HTML5** – Semantic, accessible markup | 🎤 [Lyrics.ovh API](https://lyrics.ovh) |
| **CSS3** – Flexbox, dark mode, animations | 🔠 Google Fonts ([Poppins](https://fonts.google.com/specimen/Poppins)) |
| **JavaScript (ES6+)** – Clean and modern scripting | 💡 No backend required |

---

## ⚙️ Getting Started

### 🔧 Prerequisites
- A modern browser (Chrome, Firefox, Safari, Edge)
- No API key, database, or backend required

### 📥 Installation

```bash
git clone https://github.com/HafsaRizvi2278/lyrics-finder.git
cd lyrics-finder
```

Then open `index.html` in any browser:

```bash
open index.html
# or double-click the file
```

---

## 📁 Project Structure

```
lyrics-finder/
│
├── index.html         # Entry point of the app
├── style.css          # Styling, layout, and animations
├── script.js          # API logic and interactivity
└── music.jpg          # Optional background graphic
```

---

## 🔌 API Reference

| Function        | Endpoint Example                                   |
|----------------|-----------------------------------------------------|
| Get suggestions | `/suggest/:query`                                  |
| Get lyrics      | `/v1/:artist/:title`                               |

```http
GET https://api.lyrics.ovh/v1/Coldplay/Yellow
```

---

## ♿ Accessibility & UX

- ✅ Semantic HTML with ARIA roles
- ✅ Keyboard-accessible UI
- ✅ `.sr-only` labels for screen readers
- ✅ Fully responsive on all screen sizes

---

## 🌱 Future Enhancements

- 🔊 Audio previews
- 💿 Album details & release date
- 🕘 Search history
- ⭐ Save to favorites using `localStorage`

---

## 📄 License

Released under the [MIT License](LICENSE)

---

## 🙏 Acknowledgments

- 🎤 [Lyrics.ovh API](https://lyrics.ovh)
- ✍️ Google Fonts – [Poppins](https://fonts.google.com/specimen/Poppins)
- 💡 Creative inspiration: Make music more accessible with clean UI

---

## 🌐 Live Demo

👉 [**Click to Launch**](https://hafsarizvi2278.github.io/lyrics-finder)  
<sub>*Now live via GitHub Pages*</sub>

---
