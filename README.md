<a id="readme-top"></a>

<h1 align="center">DevSearch | Connect with Developers Worldwide :desktop_computer::world_map:</h1> 

<div align="center">

<img src="/devsearch/static/images/DevSearch.png" alt="Picture of a developer search application that developers to connect from around the world, sharing their projects while engaging with others.">

<p align="center">Online platform where Developers from around the world can create a profile, engage with other developers while sharing their projects.<br>
Built as a full stack Django application with email functionality, messaging, commenting, API development with Django REST Framework, the ability to rate projects, and more!
<br />
<br />

<a href="https://github.com/AmberForrester/Developer-Platform"><strong>Source Code »</strong></a>
<br />
<br />
<a href='https://github.com/AmberForrester/Developer-Platform/issues/new?assignees=&labels=bug&projects=&template=bug-report-%F0%9F%90%9E.md&title='>Report Bug</a>
.
<a href='https://github.com/AmberForrester/Developer-Platform/issues/new?assignees=&labels=enhancement&projects=&template=feature-request-%F0%9F%9A%80.md&title='>Request Feature</a>
</p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#steps-to-install">Steps to Install</a></li>
    <li><a href="#how-to-run-the-application">How to Run the Application</a></li>
    <li><a href="#how-the-test-works">How the Test Works</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br />

A good understanding of Python and Django would be beneficial to helping you create this project. However, it is always good practice to refer to the Documentation available when developing ***any*** project. 

_Please refer to the [Python Documentation](https://docs.python.org/3/) and [Django Documentation](https://docs.djangoproject.com/en/5.1/) for your reference._

_The standard shell of Python, or REPL (Read-Eval-Print Loop) allows you to run Python code interactively as you work on a project or are in the process of learning this programming language. You may find it useful to vist the [Getting the Most Out of the Python Standard REPL website](https://realpython.com/python-repl/) to further your understanding and produce better results._

<p align="right">(<a href="#readme-top">top of page</a>)</p>



## Project Structure

<img src="/devsearch/static/images/ProjectStructure.png" alt="Picture of the project structure in Visual Studio Code">



## Installation

### Prerequisites
- **Python** >= 3: Make sure Python is installed on your machine. You can download it from [Python's official website](https://www.python.org/downloads/).
- **Django** >= 4: Download the latest version of Django by visiting their website [Django Download](https://www.djangoproject.com/download/).



### Steps to Install

1. **Clone the Repository:**
  ```bash
  git clone https://github.com/AmberForrester/Developer-Platform
  ```

2. **Set up a Virtual Environment:**

Create and activate a virtual environment to isolate your dependencies.
  ```bash
  python -m venv env
  .\env\Scripts\Activate
  ```

3. **Navigate to the project directory:**
  ```bash
  cd .\devsearch\
  ```

4. **Install Required Dependencies:** 

Run the following comman to install the dependencies specified in `requirements.txt`:
  ```bash
  pip install -r requirements.txt
  ```

5. **Set Up Environment Variables:**

Create a `config.env` file in the root directory of the project (where `manage.py` is located), and add the necessary enviornment varibles: 
  ```bash
  #Django secret key
  SECRET_KEY=your_secret_key_goes_here

  #Email settings
  EMAIL_HOST_USER=your_email
  EMAIL_HOT_PASSWORD=your_generated_app_specific_pass

  #Simple JWT
  JWT_SECRET_KEY=your_key

  #Database Setup
  DB_NAME=your_db_name
  DB_USER=you_db_user
  DB_PASSWORD=your_db_pass
  DB_HOST=your_host_location
  DB_PORT=your_chosen_port

  #Cloud Server Setup
  DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'your_db_name',
            'USER': 'your_username',
            'PASSWORD': 'your_pass',
            'HOST': 'your_db_host',
            'PORT': 'your_chosen_port',
            }
        }

  #AWS S3 Credentials
  AWS_ACCESS_KEY_ID="your_given_key_id"
  AWS_SECRET_ACCESS_KEY="your_secret_access_key"
  AWS_STORAGE_BUCKET_NAME="name_of_your_storage_bucket"
  ```

6. **Add `config.env` to `.gitignore`**

> [!CAUTION]
> To ensure your sensitive information does not get committed to version control:
  - Open (or create) the `.gitignore` file in the root directory.
  - Add the following line to the file:
  ```bash
  config.env
  ```

This step will prevent the `config.env` file from being tracked by Git and keep your sensitive credentials secure.

7. **Apply Migrations:**

Run the following commands to set up your database:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

8. **Create a Superuser:**

This allows your to access the Django admin panel:
   ```bash
   python manage.py createsuperuser
   ```

9. **Collect Static Files:** 

Gather all static files in one place for Django to use:
   ```bash
   python manage.py collectstatic
   ```

10. **Run the Server:**

Start the development server to see the application in action:
   ```bash
   python manage.py runserver
   ```

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### How to Run the Application

- **Starting the Server:** Once you have completed the installation steps, you can start the Django development server as shown above. 

- **Accessing the Application:** Open your web browser and go to `http://127.0.0.1.8000/` to view the DevSearch platform.

- **Django Admin Panel:** You can access the admin panel at `http://127.0.0.1.8000/admin/` using the superuser account you created. 

<p align="right">(<a href="#readme-top">top of page</a>)</p>



# Home Page 
<img src="/devsearch/static/images/DevSearch.png" alt="Picture of dev search home page.">

# Projects Page
<img src="/devsearch/static/images/DevSearch.png" alt="Picture of dev search projects page.">

# Profile Page
<img src="/devsearch/static/images/DevSearch.png" alt="Picture of the developer's profile page, available after logging in.">

# User Inbox
<img src="/devsearch/static/images/DevSearch.png" alt="Picture of the developer's inbox page, available after logging in.">



### Contributing

I have learned that contributions are the heart of what makes the open source community such an amazing place! We are constantly able to learn, grow, inspire eachother, and create incredible things. Any contributions you make are **greatly appreciated**, we are so lucky to be here together.

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please, don't forget to give the project a :star:! 

I appreciate you!

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### Acknowledgments

Please take some time to check out the links below! I found value in each and every one of them while creating this project, so my hope is that you will to!

* [Django 5 Course](https://dennisivy.teachable.com/p/django-beginners-course) - HUGE shout out to _Dennis Ivy_ for the course! 
* [GitHub Repo for Django Framework](https://github.com/django/django/blob/main/django/contrib/auth/views.py)
* [Postman](https://www.postman.com/downloads/)
* [JSON Web Tokens](https://jwt.io/)
* [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
* [Font Awesome](https://fontawesome.com/)
* [HTML Character Codes](https://www.toptal.com/designers/htmlarrows/)
* [PostgreSQL](https://www.postgresql.org/) - Database download
* [pgAdmin](https://www.pgadmin.org/) - PostgreSQL GUI
* [PostgreSQL database adapter - psycopg2](https://pypi.org/project/psycopg2/)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Basic Syntax: Markdown Guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)
* [Formatting Syntax: GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#animal-bug)

<p align="right">(<a href="#readme-top">top of page</a>)</p>