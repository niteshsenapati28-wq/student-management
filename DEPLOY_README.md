# Deploying Your Student Management Website — Step by Step

Your project has two parts:
1. **Backend** (PocketBase) — stores your students, courses, logins
2. **Frontend** (the website itself) — what visitors see and click

We'll deploy both for free on **Render.com**.

---

## Step 1: Put this project on GitHub

1. Go to https://github.com and sign up (free)
2. Click the **+** icon (top right) → **New repository**
3. Name it `stdmgt`, keep it Public or Private (either is fine), click **Create repository**
4. On the new repo page, click **uploading an existing file**
5. Drag in ALL the files/folders from this prepared zip
6. Click **Commit changes**

## Step 2: Sign up for Render

1. Go to https://render.com
2. Click **Get Started**, sign up using your GitHub account (easiest option)

## Step 3: Deploy both services with one click

1. On your Render dashboard, click **New** → **Blueprint**
2. Connect your `stdmgt` GitHub repository
3. Render will detect the `render.yaml` file in this project and show you
   **two services** it's about to create:
   - `stdmgt-backend` (PocketBase)
   - `stdmgt-frontend` (the website)
4. Click **Apply** — Render builds and starts both automatically

This takes a few minutes. Render will give the backend a URL like:
`https://stdmgt-backend.onrender.com`

## Step 4: Connect the frontend to the backend

1. Once `stdmgt-backend` is live, copy its URL
2. Go to the `stdmgt-frontend` service on Render → **Environment**
3. Find `VITE_POCKETBASE_URL` and paste the backend URL as its value
4. Click **Save Changes** — this will trigger the frontend to rebuild

## Step 5: Visit your live site

Once the frontend finishes building, Render gives you a URL like:
`https://stdmgt-frontend.onrender.com`

That's your live website! Share that link with anyone.

---

## Your existing data

Your existing database (students, courses, departments you already
created) is included in this package at:
`apps/pocketbase/pb_data/data.db`

Render's free disk for the backend starts **empty**, so after Step 3,
you'll need to upload this file onto that disk. The simplest way:

1. On the `stdmgt-backend` service page on Render, open the **Shell** tab
2. This opens a basic command-line terminal into your live backend
3. You'll need to get `data.db` onto the `/data` folder there —
   the easiest way is via Render's **Disk** tab, where you can see
   upload/transfer options, or by asking me for the exact one-line
   command to run once your backend URL exists.

(If this step feels confusing, just come back and tell me your backend
is live — I'll give you the exact command to copy and paste for your
specific URL.)

---

## A note on the free tier

Render's free web services "sleep" after 15 minutes of no traffic, and
take ~30-60 seconds to wake back up on the next visit. This is normal
and fine for a small/personal project. If you outgrow that, Render's
paid tier removes the sleep delay.
