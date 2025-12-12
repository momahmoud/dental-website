# How to Host Your Website

Since your website is built with static HTML, CSS, and JS, you can host it for **FREE** very easily. Here are the two best methods:

## Method 1: GitHub Pages (Recommended)

This is best if you want a professional `username.github.io/project` link and easy updates.

### Step 1: Initialize Git

Open your terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Create a Repo on GitHub

1. Go to [GitHub.com](https://github.com/new).
2. Create a new repository (name it something like `dental-course`).
3. **Do not** check "Initialize with README".

### Step 3: Push your code

Copy the commands GitHub gives you under "…or push an existing repository from the command line" and run them. They look like this:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dental-course.git
git push -u origin main
```

### Step 4: Activate GitHub Pages

1. Go to your repository **Settings** > **Pages** (on the left sidebar).
2. Under **Source**, select `main` branch.
3. Click **Save**.
4. Wait about 1-2 minutes, and your site will be live!

---

## Method 2: Netlify Drop (Fastest)

If you don't want to use Git commands, use this drag-and-drop method.

1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop your entire `dentist_photo` folder into the browser window.
3. Your site will be online instantly!
4. You can click "Site Settings" to change the domain name to something easier to read.
