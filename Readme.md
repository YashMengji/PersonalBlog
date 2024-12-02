## Client Setup (Vite + React)

### Prerequisites
- Node.js installed (v16 or later)
- npm or yarn installed

### Steps to Set Up Client

1. **Clone the Repository**  
   ```sh
   git clone https://github.com/YashMengji/PersonalBlog
   cd PersonalBlog
2. **Navigate to the Client Directory**
   ```sh
   cd client
3. **Install Dependencies**
   ```sh
   npm install
4. **Set environment variable**
    - create .env file under client folder and paste below lines
    - VITE_SERVER_URL = "http://localhost:3000"
5. **Run the Development Server**
   ```sh
   npm run dev
6. **Access the App**
    - Open the provided local development URL (e.g., http://localhost:5173) in your browser.

### Steps to Set Up Server

1. **Navigate to Server directory**
   ```sh
   cd server
2. **Install Dependencies**
   ```sh
   npm install
3. **Set environment variable**
    - create .env file under server folder and paste below lines
    - create mongoDB atlas account for free
    - create a database named personal_blog and copy the database url
    - Paste below environment variable
    - DB_URL = database_url_created_above
4. **Run the Development Server**
   ```sh
   npm run start
5. **Access the App**
   -  Open the provided local development URL (e.g., http://localhost:3000) in your browser.



