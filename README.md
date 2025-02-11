# Image Gallery App (Card list app)

This project is a **React + Tailwind CSS** application that fetches and displays images in a card layout. Users can **add and delete cards** dynamically with smooth animations. The UI rearranges after each delete.

---

## Features

✔️ **Fetches images from the mock API** ([Picsum Photos](https://picsum.photos/))  
✔️ **Displays images as cards** in a **responsive grid layout**  
✔️ **Add new cards dynamically** with an "Add" button  
✔️ **Delete cards** with smooth animations  
✔️ **Rearranges the UI after deleting** a card  
✔️ **Hover effect with zoom animation**  
✔️ **Styled with Tailwind CSS** 🎨  
✔️ **Uses Framer Motion for animations** 🎬  

---

## Getting Started

### 1. Clone the repository  
```bash
git clone <repository-url>
cd cardlist-app
```

### 2.  Install dependencies
```bash
npm install
```
### 3.  Run the application
```bash
npm start
```
### 4. View in Browser
Open http://localhost:3001

## 🏗️ How It Works  

### **1️⃣ Fetching Data**
- The app **fetches images** from a mock API ([Picsum Photos](https://picsum.photos/v2/list)) when the page loads.
- These images are displayed **as cards** in a **responsive grid layout**.
- If the API response is empty, a message **"No items available"** is displayed.

---

### **2️⃣ Displaying Cards**
- The **cards** are arranged using **CSS Grid** and adapt to different screen sizes.
- Each card contains:
  - A **random image** from the API  
  - A **delete button** to remove the card  

---

### **3️⃣ Adding a Card**
- Clicking the **"Add Card"** button generates a **new random image** and adds it **to the top** of the list.  
- The newly added card **animates into view smoothly**.

---

### **4️⃣ Deleting a Card**
- Each card has a **delete button** 🗑️.
- Clicking it **removes the card** from the UI with a **fade-out animation**.
- The remaining cards **rearrange smoothly** to fill the gap.
- A **mock API call** is used to simulate the deletion.

---

### **5️⃣ Animations & Transitions**
- **Framer Motion** is used to create **smooth animations** when adding/removing cards.
- **Hover Effect**: Cards **zoom slightly** when hovered to give a nice UI effect.
- **Deletion Effect**: The card **shrinks & fades out** when deleted.
- **Layout Rearrangement**: The UI **repositions smoothly** after a delete.

---

### **6️⃣ Handling Empty State**
- If **no cards are available**, the screen displays:
  - **Main heading ("Card List")**
  - **"No items available"** message centered
  - **"Add Card"** button to add new items
- Everything is **properly aligned** even when the list is empty.

---

### **7️⃣ Git & Source Control**
- The project is managed using **Git**, with commits structured in a logical flow.
- The repository contains **clean code**, well-structured **branches**, and **documentation**.

### npm run build
Builds the app for production to the dist folder.
The build is minified and optimized for best performance.

### npm run lint
Runs ESLint to check for any linting errors.

## Project Structure
```bash
/src
│── components
│   ├── Card.js        # Single card component
│── pages
|   ├── CardList.js    # Main component handling cards
│── App.js             # Main application entry
│── index.js           # React DOM render
```


## 🛠️ Tech Stack
- ⚛️ **React.js** – UI Development
- 🎨 **TailwindCSS** – Styling
- ⚡ **Framer Motion** – Animations & Transitions
- 🌐 **Axios** – API Calls
- 🗄️ **JSON Placeholder / Picsum Photos** – Mock API
- 🏗️ **Create React App** – Project Setup

---

## API Used
We are fetching images from Picsum Photos API:
🔗 https://picsum.photos/v2/list?page=1&limit=6

## Deployment
### 1. Build the project
```bash
npm run build
```
### 2. Deploy to Vercel / Netlify
- Connect your GitHub repository.
- Choose build as the output directory.
- Deploy 🚀

