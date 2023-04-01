# https://didaquis.github.io


My own website made with React. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Requirements
Use Node 18.15 or higher

## How to develop
* Run in development mode `npm run dev`
* Run linter `npm run lint`

## How to deploy

* Prepare the export: 
  * `npm run export`
* Delete all files on target repository:
  * `npm run delete-content-of-target-repo` (requires both repositories to be under the same folder)
* Copy all the content of `out` folder and paste in the branch master of repo https://github.com/didaquis/didaquis.github.io.git 
  * `npm run update-content-of-target-repo` (requires both repositories to be under the same folder)
* Make sure the `.nojekyll` file has been copied
