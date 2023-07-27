# Habbit-Tracker

A simple habbit tracker application to keep track of weekly report of you habbits.

- Add multiple habits.
- Track each habit everyday. These are the 3 statuses of a habit:
  - Done - Mark the habit as done for a day
  - Not done - Mark the habit as not done for a day
  - None - User did not take any action on a habit for a day
- Show weekly report i.e. today's and previous 6 days and the status of that habit for each day.
- Can change the status of habbits for today and last 6 days.

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.21.3

    $ npm --version
    6.14.18

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install Project

    $ git clone https://github.com/imdivyachoudhary/Habbit-Tracker.git
    $ cd Habbit-Tracker
    $ yarn install

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build
