# ART OF GRADA - NFT Marketplace Prototype

## Description

**ART OF GRADA** is a web-based prototype for an NFT (Non-Fungible Token) marketplace, developed as part of an industrial practice. The platform allows users to:

- Register and log in
- View a conceptual NFT marketplace
- Access profile and creation pages
- Use multi-language support (EN, RU, KZ)
- Interact with a UI inspired by Kazakh cultural aesthetics

This project demonstrates core web development principles:

- Backend logic
- Database interaction
- Frontend design
- User authentication
- Cloud deployment

---

## Technologies Used

**Backend:** Python 3, Flask\
**Database:** MongoDB (using MongoDB Atlas)\
**Frontend:** HTML5, CSS3, JavaScript (ES6+)\
**Authentication:** Flask-Login, Werkzeug (for password hashing)\
**Libraries:** PyMongo, Font Awesome, Google Fonts\
**Version Control:** Git, GitHub\
**Deployment:** Render.com

---

## Project Structure

```
/
|-- bloskfine.py        # Main Flask application
|-- requirements.txt    # Python dependencies
|-- static/             # Static files
|   |-- css/            # CSS stylesheets
|   |-- js/             # JavaScript files
|   |-- assets/         # Static assets (images, icons)
|   |-- images/         # NFT images (example)
|   -- resources/       # Other resources (logos, etc.)
|-- login.html          # Login page template
|-- register.html       # Registration page template
|-- index.html          # Main marketplace page template
|-- profile.html        # User profile page template
|-- create.html         # NFT creation page template
|-- navbar.html         # (Standalone navbar page - consider including via Jinja)
-- README.md            # This file
```

*Note: Template files like **`.html`** were found in the root directory based on the provided code. Adjust structure if templates are moved to a **`templates/`** folder.*

---

## Setup and Installation (Local Development)

### Clone the repository:

```bash
git clone https://github.com/new
cd [название-папки-проекта]
```

### Create a virtual environment (recommended):

```bash
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate
```

### Install dependencies:

```bash
pip install -r requirements.txt
```

### Set up Environment Variables:

Create a `.env` file (and add it to `.gitignore`) or set system environment variables for:

- `SECRET_KEY`: Your Flask application's secret key (generate a strong random key).
- `MONGO_URI`: Your MongoDB Atlas connection string.
- `FLASK_ENV`: Set to development for local debugging.

**Example .env file content:**

```
SECRET_KEY='your_very_secret_random_key_here'
MONGO_URI='mongodb+srv://user:password@your_cluster.mongodb.net/your_db_name?retryWrites=true&w=majority'
FLASK_ENV=development
```

Note: You might need a library like `python-dotenv`:

```bash
pip install python-dotenv
```

And add the following to the top of `bloskfine.py`:

```python
from dotenv import load_dotenv
load_dotenv()
```

---

## Running the Application Locally

1. Ensure your virtual environment is activated.
2. Make sure your MongoDB Atlas database is accessible.
3. Run the Flask development server:

```bash
flask run
```

**OR** if using the direct execution block in `bloskfine.py`:

```bash
python bloskfine.py
```

Open your browser and navigate to:\
[http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## Deployment

This application is deployed on **Render.com**.

**Live URL:** [https://nft-marketplace-cymh.onrender.com](https://nft-marketplace-cymh.onrender.com)

