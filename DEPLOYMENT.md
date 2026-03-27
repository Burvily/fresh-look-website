# Deployment Guide for GitHub Pages

This guide outlines the steps to deploy your website to GitHub Pages.

## 1. Prerequisites (CRITICAL)

**You must have Git installed and accessible in your terminal.**

To check, run:
```bash
git --version
```
If you see an error like `'git' is not recognized`, **you need to install it first**.

### How to Install Git on Windows:
1.  Download **Git for Windows**: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2.  Run the installer.
3.  **Important**: During installation, ensure the option **"Git from the command line and also from 3rd-party software"** is selected (this adds Git to your PATH).
4.  **Restart your computer** (or at least completely close and reopen VS Code/Terminal) for the changes to take effect.

## 2. Preparation (After Git is Installed)

### Open the Correct Folder
Ensure your terminal is open in the project root directory:
`c:\Users\owner\Documents\GitHub\fresh-look-website`

### Install Dependencies
Run the following command to ensure all packages are installed:

```bash
npm install
```

## 3. Deploying

Run the deployment script:

```bash
npm run deploy
```

**What this does:**
1.  Builds your project for production.
2.  Automatically sets the correct base path (`/fresh-look-website/`) for the live site.
3.  Uploads the build to a `gh-pages` branch on your repository.

## 4. GitHub Settings (One-time Setup)

After running the deploy command successfully:
1.  Go to your repository on GitHub.
2.  Navigate to **Settings** > **Pages**.
3.  Under **Build and deployment**, ensure **Source** is set to "Deploy from a branch".
4.  Under **Branch**, select `gh-pages` and save.

Your site will be live at: `https://<your-username>.github.io/fresh-look-website/`

## Troubleshooting

-   **"spawn git ENOENT" or "'git' is not recognized"**:
    -   This means Git is not installed or not in your system PATH.
    -   Follow the **"How to Install Git on Windows"** steps above.
    -   **Restart VS Code** after installing.

-   **Site shows a white screen**:
    -   Check the **Console** tab in your browser's Developer Tools (F12).
    -   If you see 404 errors, the `base` path configuration might be incorrect for your specific repo name.
