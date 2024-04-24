#!/bin/bash

# Clone the repositories
git clone git@gitlab.com:sillyangel/playmusic.git
git clone git@gitlab.com:sillyangel/playcdn2.git

# Change directory to playmusic
cd playmusic

# Install npm dependencies for playmusic
npm install

# Change directory back to the original directory
cd ..

# Install firebase-tools globally
npm install -g firebase-tools
