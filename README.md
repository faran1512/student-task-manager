
# Student Task Manager

A simple web application that helps students keep track of their tasks.

## Project Description

Student Task Manager is a simple web application that lets students add tasks, view them, mark them as completed, delete them, and search them. It runs in the browser and needs no installation or server.

The project was built by a team of two students for the *Tools and Techniques for Data Science* course. Its main purpose is to practise a real Git and GitHub team workflow: branches, Pull Requests, code reviews, issues, merge conflicts, recovery commands, tags, and releases.

## Team Members

| Name | Roll No. | GitHub |
|---|---|---|
| Faran Abdullah | MSDSF26M001 | [@faran1512](https://github.com/faran1512) |
| Salman Rasheed | PHDDSF26M003 | [@Salman030992](https://github.com/Salman030992) |

## Features

- Add a task with a title and description
- Display all tasks in a list
- Mark a task as completed (and undo it)
- Delete a task
- Search tasks by title
- Clean, responsive layout that works on mobile screens

## Technologies

| Technology | Used for |
|---|---|
| HTML | Page structure |
| CSS | Custom styling |
| JavaScript | Adding, displaying, completing, deleting, and searching tasks |
| Bootstrap 5 | Ready-made layout, form, and button styles |
| Git | Version control |
| GitHub | Hosting the repository, Issues, Pull Requests, code review, and releases |

## Git Workflow

We followed a feature-branch workflow:

1. Create the project and initialize Git (`git init`)
2. Make small, meaningful commits
3. Create the GitHub repository and push `main`
4. Create a separate branch for each feature
5. Push the branch to GitHub and open a Pull Request
6. The other team member reviews and approves the Pull Request
7. Merge the Pull Request into `main`
8. Pull the latest `main` before starting new work
9. Resolve merge conflicts when both of us change the same lines
10. Tag the stable version (`v1.0.0`) and publish a GitHub Release

## Branches

| Branch | Purpose | Created by |
|---|---|---|
| `main` | Stable, working version of the project | Faran Abdullah |
| `feature/task-form` | Task input form (title, description, Add button) | Faran Abdullah |
| `feature/task-style` | Styling: layout, buttons, task cards, responsive design | Salman Rasheed |
| `feature/task-search` | Task search feature (closes Issue #3) |

## Git Commands Demonstrated

| Command | Purpose |
|---|---|
| `git config` | Set our name and email for commits |
| `git init` | Initialize a local Git repository |
| `git status` | Show working-tree and staging status |
| `git add` | Stage changes for the next commit |
| `git commit` | Save a snapshot in local history |
| `git log` | Inspect commit history (`--oneline`, `--graph`, `--all`) |
| `git branch` | List local branches (`-a` for all branches) |
| `git switch` | Switch branches (`-c` to create a new one) |
| `git diff` | Show unstaged changes |
| `git diff --staged` | Show staged changes |
| `git clone` | Create a local copy of a remote repository |
| `git remote` | Add and show remote repositories (`add origin`, `-v`) |
| `git push` | Upload commits, branches, and tags to GitHub |
| `git fetch` | Download remote changes without merging them |
| `git pull` | Download and merge remote changes |
| `git merge` | Combine one branch into another |
| `git stash` | Temporarily save uncommitted work (`list`, `pop`) |
| `git restore` | Discard changes in the working directory |
| `git reset` | Move the branch back to an earlier commit (`--soft`) |
| `git revert` | Create a new commit that undoes an earlier commit |
| `git show` | Inspect a commit and its changes |
| `git blame` | Show who last changed each line of a file |
| `git tag` | Mark a version (`v1.0.0`) |

## GitHub Features Demonstrated

| Feature | How we used it |
|---|---|
| Repository | Public repository `student-task-manager` |
| Collaborators | Salman was added as a collaborator so he could push branches |
| Issues | Issues with a description, expected behaviour, and acceptance criteria (listed below) |
| Pull Requests | One Pull Request for each feature branch |
| Code Review | Each of us reviewed, commented on, and approved the other's Pull Requests |
| Merging | Reviewed Pull Requests were merged into `main` |
| Linking Issues | `Closes #3` in a Pull Request description closed the issue automatically on merge |
| Tags | `v1.0.0` marks the first stable version |
| Releases | GitHub Release `v1.0.0` with release notes |
| Insights → Contributors | Shows the commits made by both team members |

Issues created:

- # Implement task search
- # Add completed task status
- # Improve mobile layout

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/faran1512/student-task-manager.git
   ```
2. Open the `student-task-manager` folder.
3. Double-click `index.html` to open it in any web browser.

No installation or server is needed. An internet connection is needed to load Bootstrap; without it the app still works but looks plainer.

## Screenshots

### Application

![Student Task Manager](screenshots/app.png)

### Git History

![Git history](screenshots/git-history.png)

All screenshots of the Git and GitHub workflow are included in the submitted Word document.

## Version History

| Version | Date | Description |
|---|---|---|
| v1.0.0 | 7-10-2026 | First stable release: add, display, complete, delete, and search tasks with a responsive Bootstrap layout |

## Contributors

- **Faran Abdullah** ([@faran1512](https://github.com/faran1512)): project setup, README, `index.html`, task input form
- **Salman Rasheed** ([@Salman030992](https://github.com/Salman030992)): styling (`style.css`), responsive layout, task search feature

Full list on GitHub: [Contributors](https://github.com/faran1512/student-task-manager/graphs/contributors)
