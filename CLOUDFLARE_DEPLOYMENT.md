# Cloudflare Deployment and Domain Setup

## Deployment Process

1. Push the project code to the Azure DevOps repository.
2. Open the Cloudflare Dashboard.
3. Go to **Workers & Pages**.
4. Click on **Create Application**.
5. Connect the Azure DevOps/Git repository.
6. Select the project repository.
7. Configure build settings:
   - Framework: Vite + React
   - Build Command: `npm run build`
   - Output Folder: `dist`
8. Click on Deploy to complete the deployment process.

## Client Company Domain Setup

1. Open the deployed Pages project in Cloudflare.
2. Go to the **Custom Domains** section.
3. Click on **Set up a custom domain**.
4. Add the client company domain name.
5. Update the required DNS records from the client domain provider side if needed.
6. Complete the domain verification process.
7. After successful verification, the website will be live on the client company domain.

## Redeployment for Future Changes

1. Push the latest code changes to the repository.
2. Cloudflare will automatically trigger redeployment if auto deployment is enabled.
