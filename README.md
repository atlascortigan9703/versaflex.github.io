import os
from zipfile import ZipFile

# Create directory structure
os.makedirs("versaflex-website/assets", exist_ok=True)

# File contents
files = {
    "index.html": """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Versaflex Company</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <img src="assets/logo.png" alt="Versaflex Logo" class="logo" />
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="hero">
    <h1>Welcome to Versaflex</h1>
    <p>Innovative Solutions. Lasting Impact.</p>
  </section>

  <section id="about">
    <h2>About Us</h2>
    <p>Versaflex is a leading company in providing advanced solutions tailored to modern industries. We prioritize innovation, efficiency, and sustainability.</p>
  </section>

  <section id="services">
    <h2>Our Services</h2>
    <ul>
      <li>Custom Engineering Solutions</li>
      <li>Product Development</li>
      <li>Consulting & Strategy</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact Us</h2>
    <p>Email: info@versaflex.com</p>
    <p>Phone: +1 234 567 8900</p>
  </section>

  <footer>
    <p>© 2025 Versaflex. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>""",

    "style.css": """body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  background: #f4f4f4;
  color: #333;
}
header {
  background: #222;
  color: #fff;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  height: 40px;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1em;
}
nav a {
  color: white;
  text-decoration: none;
}
section {
  padding: 2em;
  background: white;
  margin: 1em auto;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
#hero {
  background: #0057b7;
  color: white;
  text-align: center;
  padding: 4em 2em;
}
footer {
  text-align: center;
  padding: 1em;
  background: #222;
  color: white;
}""",

    "script.js": 'console.log("Welcome to Versaflex website!");',

    "README.md": """# Versaflex Company Website

This is the official GitHub Pages website for Versaflex. Built using HTML, CSS, and JavaScript. Hosted freely via GitHub.

## How to use

Clone this repository, add files, and push to GitHub.

Website: https://your-username.github.io"""
}

# Write the files
for name, content in files.items():
    with open(f"versaflex-website/{name}", "w") as f:
        f.write(content)

# Create a placeholder logo
with open("versaflex-website/assets/logo.png", "wb") as f:
    f.write(b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR")

# Create the zip
with ZipFile("versaflex-website.zip", "w") as zipf:
    for root, dirs, filenames in os.walk("versaflex-website"):
        for filename in filenames:
            filepath = os.path.join(root, filename)
            arcname = os.path.relpath(filepath, "versaflex-website")
            zipf.write(filepath, arcname)

print("versaflex-website.zip created successfully.")
