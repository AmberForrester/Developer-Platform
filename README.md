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
    <li><a href="#features">Features</a></li>
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

- For **Windows users:** Run the following command to install the `windows-curses` package:
  ```bash
  pip install windows-curses
  ```
- For **Linux/macOS users:** No additional dependencies are needed, as `curses` is already part of the Python standard library.

5. **Add your own sample text:**
- You can add or modify the `text.txt` file to include your own sample text that users will type during the test. 
- Each line in the `text.txt` file should contain a different sentence or paragraph for the test.

<p align="right">(<a href="#readme-top">top of page</a>)</p>



### How to Run the Application

Once you've cloned the project and installed Python, follow these steps to run the typing test:

1. Open your terminal in the project directory and run the following command: 
   ```bash
   python speedTest.py
   ```

2. You will be greeted with a welcome screen. Press any key to begin the test.

3. Type the displayed text as quickly and accurately as you can.

4. Press any key to start a new test or `Esc` to exit the program.



## How the Test Works

- **Words Per Minute (WPM):** Your typing speed is calculated based on the total number of characters typed (including mistakes). The WPM is updated in real-time as you type. </br>

- **Errors:** Incorrect characters are highlighted in red, and the error count is displayed. </br>

- **Completion:** When you finish typing the entire sentence or paragraph correctly, the test ends and your final WPM and error count are displayed. </br>

# Example Output
```vbnet
    Hello world my name is Amber and I am a full stack developer.
    WPM: 68 | Errors: 3
    You completed the text! Press any key to play again or Esc to quit.
```

<p align="right">(<a href="#readme-top">top of page</a>)</p>



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