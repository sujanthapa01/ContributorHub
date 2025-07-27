# Pull Request Guidelines for Beginners 🚀

**Your first PR doesn't have to be scary! We'll guide you through every step.**

Don't worry if this is your first time contributing to open source - this guide will help you create a perfect pull request step by step.

## 🚨 SUPER IMPORTANT: Create an Issue First!

**Before doing ANYTHING else**, you must create an issue. Think of it like raising your hand in class before speaking!

### How to Create an Issue (Easy Steps):

1. **Go to GitHub** → [ContributorHub Issues](https://github.com/sujanthapa01/ContributorHub/issues)
2. **Click the green "New Issue" button**  
3. **Choose "Add New Contributor"** template
4. **Fill in your GitHub username** 
5. **Click "Submit new issue"**
6. **Wait for a maintainer to say "okay, go ahead!"** (Usually happens within 24 hours)

:::tip Why create an issue first?
It's like making a reservation at a restaurant - it lets us know you're coming and helps us prepare to help you better!
:::

## 📝 Pull Request Template (Copy & Paste This!)

When you create your pull request, copy and paste this template and fill it out:

```markdown
## Description
I'm adding my profile (@YOUR_USERNAME) to ContributorHub! This is my first open source contribution! 🎉

## What type of PR is this?
- [x] ✨ Add a contributor
- [ ] 🔧 Code Update

## Related Issues
Closes #[PUT_YOUR_ISSUE_NUMBER_HERE]

## Beginner's Checklist ✅

### Did you create a new branch? (NOT the main branch)
- [x] ✅ Yes, I created a branch called "my-username"
- [ ] ❌ No (⚠️ Please create a new branch first!)

### Did the Python script work without errors?
- [x] ✅ Yes, it worked perfectly!
- [ ] ❌ No, I got errors (⚠️ Please ask for help in the issue!)

### Did you run the magic command to add yourself?
- [x] ✅ Yes, I ran: `npm run contribute_add MY_USERNAME`
- [ ] ❌ No (⚠️ Please run this command first!)

### Did you test it on your computer?
- [x] ✅ Yes, I saw my profile on localhost:3000
- [ ] ❌ No (⚠️ Please test locally first!)

## Screenshot (Required - Show us your profile!)
<!-- Upload a screenshot showing your profile on the website -->
![My Profile](link-to-your-screenshot.png)

## How I'm feeling about my first contribution! 😊
<!-- Add a fun GIF if you want! -->
I'm super excited to be part of the open source community! 🌟
```

## 🔍 What We Check (Don't Worry, We'll Help!)

### ✅ Easy Checks (You've Got This!)
- **Issue Created First** - Did you create an issue before the PR?
- **Screenshot Included** - Can we see your profile working?
- **Template Filled Out** - Did you fill in all the sections?

### 🤖 Automatic Checks (The Computer Does This!)
- **Code Quality** - The computer checks if everything looks good
- **No Errors** - Makes sure nothing is broken

:::info Don't panic if checks fail!
If the automatic checks fail, don't worry! Comment on your PR and say "Help! The checks failed!" and we'll help you fix it. This is totally normal for beginners! 😊
:::

## 🚫 Common Beginner Mistakes (And How to Avoid Them!)

### ❌ Mistake #1: "I forgot to create an issue first"
**Fix**: Create an issue now, then update your PR description to reference it!

### ❌ Mistake #2: "I worked on the main branch"
**Fix**: No problem! Create a new branch:
```bash
git checkout -b your-username
```

### ❌ Mistake #3: "The script didn't work"
**Fix**: Ask for help in your issue! Common solutions:
- Make sure Python is installed
- Check your GitHub username spelling
- Make sure your GitHub profile is public

### ❌ Mistake #4: "I didn't test locally"
**Fix**: Run these commands:
```bash
npm start
# Open http://localhost:3000 in your browser
# Look for your profile!
```

### ❌ Mistake #5: "I forgot the screenshot"
**Fix**: Take a screenshot of your profile on the website and add it to your PR!

## 📸 How to Take a Screenshot (Step by Step)

1. **Run the website locally**: `npm start`
2. **Open your browser** to `http://localhost:3000`
3. **Find your profile** on the contributors page
4. **Take a screenshot** (different for each computer):
   - **Windows**: Press `Windows + Shift + S`
   - **Mac**: Press `Cmd + Shift + 4`
   - **Linux**: Press `Print Screen` or use Screenshot tool
5. **Save the image** in your ContributorHub folder
6. **Add it to your PR** using the template above

## 🎯 What Happens After You Submit?

### Step 1: Automatic Checks (2-5 minutes)
The computer will check your code automatically. You'll see:
- ✅ Green checkmarks = Everything looks good!
- ❌ Red X marks = Something needs fixing (don't worry, we'll help!)

### Step 2: Human Review (24-48 hours)  
A real person (maintainer) will look at your PR and either:
- ✅ **Approve it** = Congratulations! You're done!
- 💬 **Ask for small changes** = No big deal, just make the changes they suggest
- ❌ **Ask for big changes** = Rare, but we'll help you fix it!

### Step 3: Your Profile Goes Live! 🎉
Once approved, your profile will appear on the real website for everyone to see!

## 🆘 "Help! Something Went Wrong!"

**Don't panic!** Every contributor faces problems. Here's what to do:

### If You're Completely Stuck:
1. **Take a deep breath** 😊
2. **Comment on your PR** with exactly what's wrong
3. **Use this template for asking help**:

```
Help needed! 🆘

**What I was trying to do:**
Add my profile to ContributorHub

**What went wrong:**
[Describe the problem - be specific!]

**Error message (if any):**
[Copy and paste any error messages]

**What I've already tried:**
[List what you tried to fix it]

This is my first open source contribution and I'm learning! 😊
```

### Quick Fixes for Common Problems:

**"The website won't start":**
```bash
npm install
npm start
```

**"Python script error":**
```bash
pip install -r scripts/requirements.txt
python3 scripts/contributor_add.py YOUR_USERNAME
```

**"Git is confusing me":**
- Don't worry! Ask for help and we'll walk you through it step by step.

## 🌟 You're Almost There!

Remember:
- **Every expert was once a beginner**
- **Making mistakes is part of learning**  
- **The community is here to help you**
- **Your first contribution is a big achievement**

## 🎉 After Your PR is Merged

**Congratulations! You did it!** 🎊

Now you can:
- **Show off your profile** to friends and family
- **Add "Open Source Contributor" to your resume**
- **Help other beginners** who are just starting
- **Make more contributions** to other projects

### Share Your Success:
- **Twitter**: "Just made my first open source contribution to @ContributorHub! 🎉 #OpenSource #FirstContribution"
- **LinkedIn**: Add it to your experience section
- **GitHub**: Pin the repository to your profile

---

**Ready to create your pull request?** Remember: Create an issue first, then follow the [How to Contribute](../tutorial-basics/how-to-contribute) guide!

**You've got this!** 💪 The open source community believes in you!