# netflix-clone

Cloning Netflix using HTML, CSS, and Bootstrap

# Contributors

- Product Owner: [김근선](https://github.com/geunseonkim)
- Scrum Master: [도상석](https://github.com/ldss3sang)
- Members: [사석현](https://github.com/tktjrgus12), [권하람](https://github.com/kharam1436)

# How to contribute

- Please clone the repository with `develop` branch (`git clone https://github.com/awesome-team-21/netflix-clone.git`)
  - If you already cloned the repository, please get the latest version of the branch (`git pull origin develop`)
- Please create a feature branch starting with `feature/xxxxxxx` to work on your task (`git checkout -b feature/initial-commit`)
- Please create a pull request to `develop` branch with your working feature branch for review
- Please merge after a pull request is approved by at least one reviewer

### Contribute Order (Assume you already have a clone repository on your local)

- Please follow the steps on your local repository(your local computer) before you start to work your task:

1. `git pull origin develop` in `develop` branch (You can switch to `develop` branch with `git checkout develop` if you are not in `develop` branch)
1. Switch to your feature branch using `git checkout feature/xxxxxx` and then merge develop branch to your feature branch using `git merge develop`
1. Please work on your task
1. After done with your day work, please `git add .` and `git commit -m "xxxxxx"`.
1. After commit, fetch the `develop` branch by `git fetch origin develop`, `git rebase origin/develop`. This command will try to merge(rebase) your branch with most recent change in `develop` branch
1. After merging (rebaseing) the branch, you can push your brarnch to github. `git push origin feature/xxxxxxxx`(commit and push your change to your feature branch)
1. When you complete your task, please create a pull request to `develop` branch in the github(remote) reposistory (On this step, all your code changes should be in the github(remote) repository)
1. Please get a review and an approval from at least one reviewer

# Coding Conventions

- Use prettier https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- The words in `class` name in CSS should be separated with `-`(hyphen). EX) `nav-item`
- Optional Convention (However, I recommend to follow them)
  - use [BEM](https://getbem.com/) for class name
  - use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for git commit message

# Project file/folder structure

- The landing page will be `index.html`(the default html) in the root folder
- The other pages will be in each related folder
- Structure

```
  root
    ├── assets                 # any media file goes here
    |     ├── image.jpg
    ├── index.html             # landing page
    ├── global.css
    ├── style.css
    ├── movie
    |     ├── index.html       # movie main page
    |     ├── detail.html      # movie detail page
    |     └── style.css
    ├── login
    |     ├── index.html       # login page
    └──   └── style.css
```
