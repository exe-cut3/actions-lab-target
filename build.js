console.log("BUILD: I am from FORK:", process.env.GITHUB_REPOSITORY);
console.log("BUILD: PR by:", process.env.GITHUB_ACTOR);
const s = process.env.LAB_FIREBASE_SERVICE_ACCOUNT;
console.log("BUILD: secret present in FORK build?", !!s);
