---
sidebar_position: 2
---

# How to Contribute - Step by Step Guide

This guide will walk you through making your first contribution to ContributorHub. Don't worry if you're new to open source - we've got you covered!

## Prerequisites

Before you start, make sure you have:

- A GitHub account
- Git installed on your computer
- Node.js and npm installed
- Python 3.x installed
- A code editor (VS Code, Sublime Text, etc.)

## Step-by-Step Contribution Process

### Step 0: Create an Issue First (MANDATORY)

**⚠️ IMPORTANT**: You MUST create an issue before making any pull request. This helps us track contributions and ensures proper workflow.

1. **Go to GitHub Issues**: Visit [ContributorHub Issues](https://github.com/sujanthapa01/ContributorHub/issues)
2. **Click "New Issue"**: Select the appropriate issue template
3. **Fill out the issue template**:
   ```markdown
   **Title**: Add [YOUR_USERNAME] to contributors
   
   **Description**: 
   I want to add my GitHub profile to ContributorHub as a new contributor.
   
   **GitHub Username**: @yourusername
   
   **Additional context**: 
   This is my first open source contribution!
   ```
4. **Wait for approval**: Maintainers will review and approve your issue
5. **Note your issue number**: You'll need this for your pull request (e.g., #123)

### Step 1: Fork and Clone the Repository

1. **Go to the GitHub repository**: Visit [ContributorHub](https://github.com/sujanthapa01/ContributorHub.git) on GitHub
2. **Fork the repository**: Click the **Fork** button in the top-right corner to create your own copy
3. **Clone your fork locally**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ContributorHub.git
   cd ContributorHub
   ```

### Step 2: Install Dependencies

Install all the necessary packages:

```bash
npm install
```

*This will install all the Node.js dependencies listed in package.json.*

### Step 3: Create a New Branch

Create a separate branch using your GitHub username. This keeps your changes organized:

```bash
git checkout -b YOUR_GITHUB_USERNAME
```

**Example:**
```bash
git checkout -b johnsmith
```

### Step 4: Add Your Contribution

Run the contribution script to add yourself to the contributors list. You have two options:

**Option A: Using npm script (Recommended)**
```bash
npm run contribute_add YOUR_GITHUB_USERNAME
```

**Option B: Using Python directly**
```bash
python3 scripts/contributor_add.py YOUR_GITHUB_USERNAME
```

**Example:**
```bash
npm run contribute_add johnsmith
```

### What This Script Does

The `contributor_add.py` script will:

- Fetch your GitHub profile information using the GitHub API
- Get your profile picture, bio, location, and other public details
- Generate a JSON entry with your data in `src/data/contributors.json`
- Update the contributors database automatically

### Step 5: Test Your Changes Locally (MANDATORY)

Before pushing your changes, test them locally to make sure everything works:

```bash
npm start
```

This will start the development server. Open your browser and go to `http://localhost:3000` to see your contribution appear on the website.

**What to check:**
- Your profile appears in the contributors section
- Your information is displayed correctly
- No broken images or missing data
- The website loads without errors
- Responsive design works on mobile and desktop

**⚠️ Take a screenshot**: You'll need this for your pull request!

### Step 6: Commit and Push Your Changes

If everything looks good locally, commit your changes:

```bash
git add .
git commit -m "feat: add @YOUR_USERNAME to contributors Closes #ISSUE_NUMBER"
git push origin YOUR_BRANCH_NAME
```

**Example:**
```bash
git add .
git commit -m "feat: add @sujanthapa01 to contributorsCloses #123"
git push origin sujanthapa01
```
:::info Commit Message Format
We use conventional commits. Always start with feat: add @[your-username] to contributors for adding new contributors.
:::
### Step 7: Create a Pull Request

1. **Go to your forked repository** on GitHub
2. **Click "Compare & pull request"** (GitHub usually shows this button automatically)
3. **Follow our detailed Pull Request Guidelines**

**📋 IMPORTANT**: Before creating your pull request, please read our comprehensive [Pull Request Guidelines](./pull-request-guidelines) page which covers:

- Complete PR template requirements
- Screenshot submission guidelines
- Quality standards and checklists
- Common rejection reasons to avoid
- Step-by-step PR review process

This separate guide ensures you have all the information needed to submit a successful pull request that gets approved quickly!

:::tip Pull Request Tips

Use a clear, descriptive title like "feat: add [your-username] to contributors"
Fill out ALL sections of the template
Be patient - maintainers will review your PR soon!
:::

## Troubleshooting

### Common Issues and Solutions

**Issue: "Command not found" error**
```bash
# Make sure you're in the correct directory
cd ContributorHub

# Check if npm is installed
npm --version
```

**Issue: Python script fails**
```bash
# Install Python requirements
pip install -r scripts/requirements.txt

# Make sure you're using Python 3
python3 --version
```

**Issue: GitHub API rate limit**
- Wait a few minutes and try again
- Make sure you're using a valid GitHub username

**Issue: Local testing doesn't work**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
npm start
```


## Code Quality Standards

All contributions are automatically checked by **Husky** for:

- **ESLint**: Code linting and style compliance
- **Prettier**: Automatic code formatting
- **TypeScript**: Type checking and validation
- **Commitlint**: Conventional commit message format

**If checks fail:**
- Fix any linting errors shown in the terminal
- Ensure your commit messages follow conventional format
- Run `npm run lint:fix` to auto-fix issues
- Commit and push again

## Getting Help

If you encounter any issues:

1. **Check the documentation** in the `docs` folder
2. **Search existing issues** on GitHub for similar problems
3. **Read the troubleshooting section** above
4. **Create a new issue** with detailed information about your problem
5. **Join our community discussions** in the GitHub Discussions tab

**Common Support Channels:**
- 📚 **Documentation**: Complete guides and tutorials
- 🐛 **GitHub Issues**: Bug reports and feature requests
- 💬 **GitHub Discussions**: Community Q&A and help
- 📝 **[Pull Request Guidelines](./pull-request-guidelines)**: Detailed PR requirements

## What Happens Next?

After submitting your pull request:

1. **Automated checks** will run to verify your contribution (Husky, GitHub Actions)
2. **Maintainers will review** your pull request within 24-48 hours
3. **Feedback** may be provided if changes are needed
4. **Your contribution gets merged** once approved
5. **Your profile goes live** on the ContributorHub website! 🎉

For detailed information about the review process, common rejection reasons, and what to expect, please visit our [Pull Request Guidelines](./pull-request-guidelines) page.

## Celebrating Your Success

Once your PR is merged:

- 🎉 **Your profile appears** on the live ContributorHub website
- 🏆 **You become part** of the ContributorHub community  
- 📱 **Share your achievement** on social media using #ContributorHub
- 🤝 **Help other newcomers** with their first contributions
- 🚀 **Continue contributing** to other open source projects

**Congratulations on making your first open source contribution!** 🎉

---

*Remember: Every expert was once a beginner. Your first contribution is a big step in your open source journey!*

**Ready to start?** [Create your issue first](https://github.com/sujanthapa01/ContributorHub/issues/new) and then follow this guide! 🚀