#!/bin/bash

# Helper script to push changes to GitHub
# Run this with: bash push-to-github.sh

echo "🚀 Pushing Iron Supplements improvements to GitHub..."
echo ""
echo "Repository: https://github.com/gazer33/Iron-suplements.git"
echo "Branch: main"
echo ""

cd /tmp/iron-gym

# Check if we have commits to push
if git status | grep -q "Your branch is ahead"; then
    echo "✅ Found commits ready to push"
    echo ""

    # Push to GitHub
    git push origin main

    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Successfully pushed to GitHub!"
        echo "🌐 View at: https://github.com/gazer33/Iron-suplements"
    else
        echo ""
        echo "❌ Push failed. Please check your credentials."
        echo ""
        echo "💡 Tips:"
        echo "  - Make sure you're authenticated with GitHub"
        echo "  - Try: gh auth login"
        echo "  - Or use a personal access token"
    fi
else
    echo "ℹ️ No commits to push. Everything is up to date."
fi
