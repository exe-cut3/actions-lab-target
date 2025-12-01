// build.js
console.log("BUILD: running from repo:", process.env.GITHUB_REPOSITORY);
console.log("BUILD: actor:", process.env.GITHUB_ACTOR);
// Демонстрация: есть ли секрет (НЕ выводим значение, только факт)
const s = process.env.LAB_FIREBASE_SERVICE_ACCOUNT;
console.log("BUILD: secret present?", !!s);
