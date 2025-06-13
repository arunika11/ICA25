# ICACC 25

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This repository hosts the website for the **International Conference of Agriculture Centric Computation 2025 (ICA 2025), 3rd Edition**, which took place from **May 13th to 16th, 2025**, at **IIT Guwahati**. The official hosted website can be found at [event.iitg.ac.in](https://event.iitg.ac.in/ica25).

This entire website was developed and maintained by **Avinash Gupta** from IIT Guwahati, under the guidance of **Professor Hanumant Singh Shekhawat**, one of the organizers of ICA 2025.

## Themes of the International Conference of Agriculture 2025 (3rd Edition)

While the specific themes would be detailed on the conference website, international conferences on agriculture typically cover a wide range of topics crucial for the advancement and sustainability of the agricultural sector. These often include:

  * **Sustainable Agriculture and Resource Management:** Focusing on practices that conserve natural resources, reduce environmental impact, and ensure long-term productivity.
  * **Climate-Smart Agriculture:** Addressing the challenges posed by climate change through adaptation and mitigation strategies in agriculture.
  * **Precision Agriculture and Digital Farming:** Exploring the use of technology like sensors, drones, AI, and data analytics to optimize farming practices.
  * **Biotechnology and Crop Improvement:** Discussing advancements in genetic engineering, breeding techniques, and other biotechnological tools for enhancing crop yields and quality.
  * **Food Security and Nutrition:** Addressing global food security challenges, improving nutritional value of food, and reducing food waste.
  * **Post-Harvest Technology and Food Processing:** Focusing on innovations in food preservation, processing, and value addition.
  * **Agricultural Economics and Policy:** Examining economic aspects of agriculture, trade policies, and rural development.
  * **Livestock Management and Health:** Covering sustainable livestock production, animal health, and disease management.
  * **Horticulture and Plantation Crops:** Discussing advancements in the cultivation and management of fruits, vegetables, and plantation crops.
  * **Soil Health and Fertility:** Emphasizing the importance of soil health for sustainable agricultural production.

For the comprehensive list of themes and sub-themes, please refer to the official ICA 2025 website at [event.iitg.ac.in](https://event.iitg.ac.in/ica25).

## Available Commands

```bash
npm install    # Install dependencies
npm start      # Start development server at http://localhost:3000 (auto-reloads on changes)
npm test       # Launch interactive test runner
npm run build  # Bundle and minify for production into the build/ folder
```

## Deployment

1. Copy the contents of `build/` into your server’s public directory.

2. At your web root, add a `.htaccess` file to enable client-side routing:

   ```apacheconf
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ – [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

3. Upload the `build/` files via any FTP/SFTP client.

4. Point your domain to the server—your React app should now be live!


