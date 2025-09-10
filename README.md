# dad-firebase-functions-template

A minimal **Firebase Cloud Functions** starter template with **TypeScript**.  
Includes: Firebase Functions v2, TypeScript, ESLint, and a sample `hello` HTTP function.

---

## 🚀 Quick Start

### Option A — Use this template
1. Click **Use this template** on GitHub.  
2. Clone your new repo:  
   ```
   bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/dad-firebase-functions-template my-app
   cd my-app
   ```

3. Install dependencies and connect to Firebase:
   ```
   bash
   cd functions && npm install
   cd ..
   firebase login
   firebase use --add   # pick your Firebase project
   ```

### Option B — Clone with degit
```
bash
npx degit daboigbae/dad-firebase-functions-template YOUR_PROJECT_NAME
cd YOUR_PROJECT_NAME
cd functions && npm install
cd ..
firebase login
firebase use --add
```

---

## 🛠 Development

Run the local emulator:
```
bash
npm run dev
```

Visit:
```
http://127.0.0.1:5001/YOUR_PROJECT_ID/us-central1/hello
```

---

## 🚢 Deploy

Deploy functions to your Firebase project:
```
bash
npm run deploy
```

---

## ✅ Checklist
* [ ] Replace `YOUR_FIREBASE_PROJECT_ID` in `.firebaserc`.
* [ ] Update the `name` field in `package.json` to your project name.
* [ ] Run `firebase login` and `firebase use --add`.
* [ ] Test locally with `npm run dev`.
* [ ] Deploy with `npm run deploy`.
* [ ] (Optional) Add secrets with:

  ```bash
  firebase functions:secrets:set MY_SECRET
  ```

---

## 📂 Project Structure

```
YOUR_PROJECT_NAME/
├── firebase.json          # Emulator + deploy config
├── .firebaserc            # Project alias (replace with your ID)
├── package.json           # Root scripts (update name field)
├── functions/
│   ├── src/
│   │   ├── index.ts       # Main exports + sample hello function
│   │   └── firebase/
│   │       └── authentication/
│   │           ├── onUserSignup.ts    # User creation handler
│   │           └── onUserDelete.ts    # User deletion handler
│   ├── tsconfig.json      # TypeScript config
│   └── package.json       # Functions deps + build scripts
└── README.md              # You are here
```

---

Made with ❤️ by Digital Art Dealers