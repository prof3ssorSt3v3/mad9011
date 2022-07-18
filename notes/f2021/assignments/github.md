# Steps to Follow to set up a Repo for an Assignment

::: Note
These are generic instructions about getting started with new repos to use in your assignments.
:::

## 1. Always Start with Your Own Repo on GitHub

- Create a **Private** GitHub Repo called `whatever the assignment asked you to create` on your GitHub account, with **NO** README.md file.
- On the GitHub settings for your repo, set your master branch as the gh-pages branch.
- On the GitHub settings for your repo, go to the `Collaborators` tab and invite your instructor to the repo as a collaborator. On GitHub, Steve's username is `prof3ssorst3v3`.

## 2a. Using a Copy of an Instructor's Repo

- Sometimes you will start with a repo provided by your instructor. If you do **NOT** have one of these then skip to **step 3**.
- Start in Terminal (MacOS) or Command Shell (Windows) by navigating to the folder where you want to create your own copy of the repo.
- Next, clone their repo Eg: https://github.com/instructorsname/reponame on to your computer by typing the following in the Terminal:

```
git clone https://github.com/instructorsname/reponame.git reponame
```

- Make sure you change the user name and repo names to the proper ones.
- the second `reponame` is the name of the folder you will be creating.
- Next **DELETE** the `.git` folder inside your reponame folder with the following commands:

```
cd reponame
rm -rf .git
```

- replace `reponame` with your actual folder name.
- Now we need to turn our folder into a Git repo on our computer and point it at the one that we created on GitHub.

```
git init
git remote add origin https://github.com/[YOUR USERNAME]/reponame.git
```

- <Badge text="Warning">
- **IF** you did create a repo with a `README.md` file on GitHub or you changed the repo or added files through the GitHub interface then we need to download that file before adding our own. Type this to download all files from your own repo on GitHub:

```
git pull -u origin master
```

If there was nothing new to download then the `pull` command will give a warning.

## 2b. Starting with Your Own Github Repo

- If you were not provided with a starter repo, and just created one of your own on GitHub then the steps are similar.
- You will need to clone your own repo from GitHub to a local folder.
- Start by navigating with Terminal (MacOS) or Command Shell (Windows) to the place where you want to create the repo.
- Next clone your repo by typing the following:

```
git clone https://github.com/[YOUR USERNAME]/reponame.git reponame
```

- replace the username and reponame with your own.
- the second `reponame` is the name of the folder you will be creating.
- finally, navigate into your repo folder.

```
cd reponame
```

- Change the name of the folder to the one you created.

## 3. Adding Starter Files

- Sometimes you will have files that are provided for your assignment, like HTML or CSS or images in a Zip file on BSLMS. These need to be copied into the repo folder and then we need to tell Git to keep track of the files.
- In your Terminal (MacOS) | Command Shell (Windows), you should be inside your `reponame` folder and type the following:

```
git add -A
git commit -m "first files"
git push -u origin master
```

## 4. Modifying your Repo

- **EVERY** time you want to save your changes locally and then upload, use these same commands:

```
git status
git add -A
git commit -m "description of your changes"
git push -u origin master
```

Additional [Git CLI Reference Playlist](https://www.youtube.com/watch?v=EdEWigP6zxQ&list=PLyuRouwmQCjmYaG21ijCw0KrFiFEG0Oh9)

[Back to the Assignment List](./README.md)
