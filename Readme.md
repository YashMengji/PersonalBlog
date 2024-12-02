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

## Deployment as a Web Service on Render

### Prerequisites
- A Render account (sign up at [Render](https://render.com/))
- A GitHub repository containing the project

### Steps to Deploy

1. **Push the Project to GitHub**  
   Make sure your Vite React app is pushed to a GitHub repository.

2. **Log in to Render**  
   Go to [Render](https://render.com/) and log in to your account.

3. **Create a New Web Service**  
   - In the Render dashboard, click on **"New +"** and select **"Web Service"**.
   - Connect your GitHub repository to Render.
   - Select the branch containing the Vite React app.

4. **Configure Build & Start Commands**  
   Render requires specific commands to build and serve your Vite app:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   
   These commands will install dependencies, build the production version of the app, and then start the preview server.

5. **Choose a Region**  
   Select a region where you want your app to be deployed.

6. **Deploy the Web Service**  
   Click on **"Create Web Service"**. Render will build the app and deploy it as a web service.

7. **Access the Live Service**  
   Once the deployment is complete, you will be provided with a URL to access the live web service (e.g., `https://your-app.onrender.com`).

   ## Deployment of Node.js Backend on Render

### Prerequisites
- A Render account (sign up at [Render](https://render.com/))
- A GitHub repository containing the Node.js backend project

### Steps to Deploy

1. **Push the Project to GitHub**  
   Make sure your Node.js backend project is pushed to a GitHub repository.

2. **Log in to Render**  
   Go to [Render](https://render.com/) and log in to your account.

3. **Create a New Web Service for Node.js**  
   - In the Render dashboard, click on **"New +"** and select **"Web Service"**.
   - Connect your GitHub repository to Render.
   - Select the branch containing your Node.js backend.

4. **Configure Build & Start Commands**  
   Render requires specific commands to build and run your Node.js backend:
   - **Build Command**: `npm install`  
     This will install all the required dependencies for the backend.
   - **Start Command**: `npm start`  
     This will start the Node.js server. Ensure that your `package.json` has a `start` script like this:
     ```json
     "scripts": {
       "start": "node server.js"
     }
     ```

5. **Choose a Region**  
   Select a region where you want your app to be deployed.

6. **Deploy the Web Service**  
   Click on **"Create Web Service"**. Render will build and deploy your backend as a web service.

7. **Set Environment Variables** (Optional)  
   If your application relies on environment variables (e.g., for database connections, API keys), you can set them in the **Environment** section under the **"Settings"** tab of your service.

8. **Access the Live Service**  
   Once the deployment is complete, Render will provide a URL for your backend service (e.g., `https://your-backend-service.onrender.com`).

## Architecture Overview

The Personal Blog project follows a modern full-stack architecture, utilizing the MERN stack (MongoDB, Express.js, React.js, and Node.js) to build a seamless and efficient user experience. Below is an overview of the architecture of the system.

### 1. **Frontend (React.js)**
   The frontend of the blog is built using **React.js**. It provides an interactive and dynamic user interface for the blog, allowing users to view and interact with blog posts. The frontend communicates with the backend via RESTful APIs to fetch and submit data.

   - **Technologies**: React.js, Axios for API requests, React Router for routing
   - **Features**:
     - View, add blog posts
     - Display images associated with blog posts

   - **Key Components**:
     - `Home.jsx`: Displays a list of blog posts.
     - `Post.jsx`: Displays a single blog post with its content and image.
     - `CreatePost.jsx`: Displays a form to create post
     - `BlogContext.jsx`: A context to manage and share blog data across the app.
   
   - **API Communication**: The frontend makes HTTP requests to the backend using 
   Axios to interact with the APIs for creating and fetching posts.
   - **Proxy**: Used a proxy for communicating with backend apis
   - **Custom Hooks**: Configured a custom hooks useAsync.js for indicating the loading error states till the value is fetched from backend 

### 2. **Backend (Node.js + Express.js)**
   The backend is built using **Node.js** with the **Express.js** framework. It provides RESTful APIs for managing blog posts, and serving static files (like images). The backend is responsible for business logic, interacting with the database, and sending responses to the frontend.

   - **Technologies**: Node.js, Express.js, MongoDB (via Mongoose), Multer for file uploads
   - **Features**:
     - Create, read blog posts
     - Serve images (uploaded with blog posts) as a static resource
     - Manage blog post data (title, content, images)

   - **API Endpoints**:
     - `POST /api/posts`: Create a new blog post.
     - `GET /api/posts`: Fetch all blog posts.
     - `GET /api/posts/:id`: Fetch a single blog post by ID.
     - `GET /api/posts/:id/image`: Fetch an image associated with a blog post.

   - **Middleware**:
     - Multer is used for handling image uploads and storing them as binary data.
     - JWT authentication middleware for securing routes that require login.

   - **Database**: MongoDB is used as the database to store blog posts and user data. Mongoose is used to define schemas and interact with MongoDB.

### 3. **Database (MongoDB)**
   The project uses **MongoDB** to store the data for blog posts and users. MongoDB’s flexible schema allows us to store blog post content, images, and user information efficiently.

   - **Collections**:
     - **Posts**: Stores blog posts with fields like title, content, and image data.
    purposes.

### 4. **File Storage (Multer)**
   - **Multer** is used to handle image uploads in the blog posts. The images are stored in memory and saved as binary data in the MongoDB database. When a user uploads an image with their post, it is processed and saved alongside the post’s content.


### 6. **Deployment**
   - The backend is deployed as a Node.js service on a platform such as **Render**
   - The frontend is deployed as a web service using **Vite** and can be hosted on platforms like **Render**






