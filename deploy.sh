#!/bin/bash
hugo
cd public
git add .
git commit -m "Deploy $(date)"
git push origin main
cd ..
