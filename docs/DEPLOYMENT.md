# GitHub Pages Deployment Setup

This guide will help you set up automatic deployment of the ReFi Provence website to GitHub Pages.

## Prerequisites

- Repository is hosted at: `https://github.com/ReFiDAO/ReFi-Provence`
- You have admin access to the repository
- The deployment workflow file exists at `.github/workflows/deploy.yml`

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/ReFiDAO/ReFi-Provence`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

## Step 2: Verify Workflow Permissions

The workflow file (`.github/workflows/deploy.yml`) already has the correct permissions:
- `contents: read` - to read repository content
- `pages: write` - to deploy to GitHub Pages
- `id-token: write` - for OIDC authentication

If you need to adjust permissions:
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, ensure **Read and write permissions** is selected
3. Check **Allow GitHub Actions to create and approve pull requests** (if needed)

## Step 3: Commit and Push Changes

If you haven't already committed the deployment workflow:

```bash
cd "03 Libraries/ReFi-Provence"
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

## Step 4: Trigger Deployment

The workflow will automatically run when you push to the `main` branch. You can also trigger it manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

## Step 5: Monitor Deployment

1. Go to **Actions** tab
2. Click on the running workflow
3. Watch the build progress:
   - **build** job: Installs dependencies and builds the site
   - **deploy** job: Deploys to GitHub Pages

## Step 6: Access Your Site

Once deployment completes, your site will be available at:

**GitHub Pages URL:**
- `https://refidao.github.io/refi-provence/` (default - French)
- `https://refidao.github.io/refi-provence/fr/` (French)
- `https://refidao.github.io/refi-provence/en/` (English)

The root URL (`/`) will automatically redirect to the appropriate language based on browser settings.

## Troubleshooting

### Build Fails

**Error: "npm run build:multilang" fails**
- Check that `scripts/build-multilang.mjs` exists
- Verify `package.json` has the `build:multilang` script
- Check Actions logs for specific error messages

**Error: "Cannot find module"**
- Ensure all dependencies are in `package.json`
- The workflow runs `npm ci` which installs from `package-lock.json`
- Make sure `package-lock.json` is committed

### Deployment Fails

**Error: "Permission denied"**
- Verify GitHub Pages is enabled in Settings → Pages
- Check workflow permissions in Settings → Actions → General
- Ensure the repository has Pages enabled (may require admin access)

**Error: "No pages found"**
- Verify the build job completed successfully
- Check that `public/` directory contains built files
- Ensure `path: ./public` in the upload artifact step matches your build output

### Site Not Updating

- GitHub Pages can take 1-2 minutes to update after deployment
- Clear browser cache or use incognito mode
- Check the deployment status in Actions tab
- Verify the latest commit was pushed to `main` branch

## Custom Domain Setup (Future)

When ready to use a custom domain:

1. Create `quartz/static/CNAME` file with your domain:
   ```
   refiprovence.org
   ```

2. Configure DNS:
   - Add CNAME record: `refiprovence.org` → `refidao.github.io`
   - Or use A records for apex domain (see GitHub Pages docs)

3. Update `baseUrl` in `quartz.config.ts`:
   ```typescript
   baseUrl: "refiprovence.org"
   ```

4. Commit and push - GitHub Pages will automatically configure the domain

## Manual Deployment

If you need to deploy manually without pushing:

```bash
# Build locally
npm run build:multilang

# The public/ directory contains the built site
# You can manually upload this to GitHub Pages if needed
```

## Next Steps

- Add assets (logos, images) to `assets/` folder
- Update content as needed
- Monitor deployment in Actions tab
- Share your site URL: `https://refidao.github.io/refi-provence/`
