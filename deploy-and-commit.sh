#!/bin/bash

if ! command -v firebase >/dev/null 2>&1; then
    echo "Firebase tools are not installed. Installing now..."
    npm install -g firebase-tools

    # Check if the installation was successful
    if [ $? -eq 0 ]; then
        echo "Firebase tools installed successfully."
    else
        echo "Error: Failed to install firebase-tools. Please try installing it manually."
        exit 1
    fi
fi

# Continue with the rest of the script
echo "Please enter a commit message:"
read commit_message

# Rest of the script here...

# Prompt the user for a commit message

# Check if the commit message is empty
if [ -z "$commit_message" ]; then
    echo "Error: commit message cannot be empty."
    exit 1
fi

# Deploy to Firebase with a custom message
echo "Deploying to Firebase"
npm run buildwebpack
firebase deploy

# Add all changes to the Git staging area
echo "Adding changes to Git staging area..."
git add .

# Commit changes with the provided message
echo "Committing changes with message: $commit_message"
git commit -m "$commit_message"

# Push changes to the remote repository with a custom branch
remote_branch="main"
echo "Pushing changes to the remote repository to the '$remote_branch' branch..."
git push origin "$remote_branch"

# Check if the push was successful
if [ $? -eq 0 ]; then
    echo "Deployment and commit to '$remote_branch' branch successful!"
else
    echo "Error: failed to push changes to the '$remote_branch' branch."
    exit 1
fi

