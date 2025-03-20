<!--
@license
Copyright (c) 2025 Rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# Contributors Guide

- [Install Tools](#install-tools)
  - [Node](#node)
  - [PNPM](#pnpm)
  - [GitHub CLI](#github-cli)
  - [Vscode](#vscode)
- [Get access To GitHub](#get-access-to-github)
  - [Get an GitHub account](#get-an-github-account)
  - [Request organization access](#request-organization-access)
  - [Upload your public SSH key](#upload-your-public-ssh-key)
  - [Login with GitHub CLI](#login-with-github-cli)
- [Open the code the first time](#open-the-code-the-first-time)
  - [Create a dev and rljson folder](#create-a-dev-and-rljson-folder)
  - [Clone code](#clone-code)
  - [Configure email address and user name](#configure-email-address-and-user-name)
  - [Open template with Vscode](#open-template-with-vscode)
  - [Install recommended extensions](#install-recommended-extensions)
  - [Activate PNPM for the project](#activate-pnpm-for-the-project)
- [Develop your feature](#develop-your-feature)
  - [Replace in this doc](#replace-in-this-doc)
  - [Checkout main](#checkout-main)
  - [Create a feature branch](#create-a-feature-branch)
  - [Debug and develop](#debug-and-develop)
  - [Commit](#commit)
  - [Update dependencies](#update-dependencies)
  - [Increase version](#increase-version)
  - [Build](#build)
  - [Create a pull request](#create-a-pull-request)
  - [Delete feature branch](#delete-feature-branch)
  - [Publish to NPM](#publish-to-npm)
- [Use this helpers](#use-this-helpers)
  - [Debug with Vscode](#debug-with-vscode)
  - [Update goldens](#update-goldens)
  - [Test and Build](#test-and-build)
  - [Rename classes](#rename-classes)
- [Troubleshooting](#troubleshooting)
  - [Checkout README.trouble.md](#checkout-readmetroublemd)
  - [File issues on GitHub](#file-issues-on-github)

<!-- ........................................................................-->

## Install Tools

### Node

[Install Node on Windows](./doc/install/node-win.md)

[Install Node on Mac](./doc/install/node-mac.md)

### PNPM

```bash
npm install --global corepack@latest
corepack enable pnpm

```

### GitHub CLI

Windows: Visit <https://cli.github.com>

Mac

Visit <https://github.com/>

In the top right corner, click `Sign up`

Restart Terminal when opened

### Vscode

Visit <https://code.visualstudio.com/download>

Download and install

## Get access To GitHub

### Get an GitHub account

If you have already an GitHub account, skip this step.

Visit <https://github.com/>

In the top right corner, click `Sign up`

Follow the instructions to get an account

#### Create an SSH key

If you already have created an SSH key, skip this step.

Visit <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account>

In the Tab bar select either `Mac`, `Windows` or `Linux`

Follow the instructions

### Request organization access

Ask an Administrator of the <https://github.com/rljson> to give you access to
the Rljson GitHub organization by performing the following steps:

1. Visit <https://github.com/rljson>

2. In the top menu, click `People`

3. Click the green `Invite member` button

4. Enter the new user's GitHub email address.

5. And click `Invite`

6. Wait until the new user has accepted the invitation

7. Assign the right role (member, outside contributor etc) to the new user

### Upload your public SSH key

### Login with GitHub CLI

We have installed the GitHub CLI before

Now its time to login

```bash
gh auth login
```

Select the following answers:

- ? Where do you use GitHub? `GitHub.com`
- ? What is your preferred protocol for Git operations on this host? `SSH`
- ? Upload your SSH public key to your GitHub account? `C:\Users\...`
- ? Title for your SSH key: (GitHub CLI) `Dell Laptop`
- ? How would you like to authenticate GitHub CLI? `Login with a web browser`

Copy the shown one-time code, right beside `First copy your one-time code`

Press `Enter`

Brows opens

Paste the code copied before

Make sure `rljson` is selected

Click `Authorize GitHub`

## Open the code the first time

### Create a dev and rljson folder

Rljson consists of multiple repos, so we recommend to checkout all rljson
projects into a `rljson` folder. In this documentation we are using
`~/dev/rljson` as the development folder.

```bash
cd ~/
mkdir dev
cd dev
mkdir rljson
cd rljson
```

### Clone code

```bash
cd ~/dev/rljson
git clone https://github.com/rljson/template.git
```

### Configure email address and user name

Replace `first` an `last` by your first and last name and execute:

```bash
git config --global user.name "first last"
```

Replace `email` by your email and execute:

```bash
git config --global user.email "email"
```

### Open template with Vscode

```bash
code template
```

### Install recommended extensions

When opening this project the first time, you will be asked to install
recommended workspace extensions. Click on `install`.

If you do not see this step,

Press `Ctrl+Shift+P`.

Type `Extensions: Show Recommended Extensions` and press `Enter`.

The recommended extensions will be shown.

Make sure, all recommended extensions are installed.

### Activate PNPM for the project

```bash
corepack use pnpm
```

<!-- ........................................................................-->

## Develop your feature

### Replace in this doc

Replace `extend-readmes-on-npm-publishing-and-repo-creation` by the name of your new branch

Replace `Extend READMEs on NPM publishing and repo creation` by your new commit message and PR title

### Checkout main

```bash
git checkout main
git fetch
git pull
```

### Create a feature branch

```bash
git checkout -b extend-readmes-on-npm-publishing-and-repo-creation
```

### Debug and develop

Debug and develop

### Commit

If you only have one thing changed, execute

```bash
git add .
git commit -m "Add extend-readmes-on-npm-publishing-and-repo-creation"
```

### Update dependencies

```bash
pnpm update --latest
git commit -am"Update dependencies"
```

### Increase version

```bash
pnpm version patch --no-git-tag-version
git commit -am"Increase version"
```

### Build

```bash
npm run build
```

### Create a pull request

```bash
git push -u origin extend-readmes-on-npm-publishing-and-repo-creation
gh pr create --base main --title "Add extend-readmes-on-npm-publishing-and-repo-creation" --body " "
gh pr merge --auto --squash
node ./scripts/wait-for-pr.js
```

### Delete feature branch

```bash
git fetch
git checkout main
git reset --soft origin/main
git stash -m"PR Aftermath"
git pull
git branch -d extend-readmes-on-npm-publishing-and-repo-creation
```

### Publish to NPM

```bash
npm publish --access public
node scripts/add-version-tag.js
```

<!-- ........................................................................-->

## Use this helpers

Read [README.architecture.md](./README.architecture.md) to get an overview
of the package's architecture.

### Debug with Vscode

In Vscode: At the `left side bar` click on the `Test tube` icon to open the `Test explorer`.

At the `top`, click on the `refresh` icon to show update the tests.

Open a test file (`*.spec.ts`)

Set a breakpoint.

Press `alt` and click on the play button left beside the test.

Execution should stop at the breakpoint.

### Update goldens

In various tests we are creating golden files, that are reference files that
are compared against the files created in the tests.

```bash
pnpm updateGoldens
```

### Test and Build

```bash
pnpm test
pnpm build
```

### Rename classes

Replace `ClassA` by `ClassB` in the following script and run it:

```bash
node ./scripts/rename-class.js Template ClassB
```

<!-- ........................................................................-->

## Troubleshooting

### Checkout README.trouble.md

Checkout [./README.trouble.md](./README.trouble.md)

### File issues on GitHub

Visit <https://github.com/rljson/template/issues>

Check if there is already an issue for your problem.

If no, report the issue.
