After investigating, I found that a recent update to the react-native-web package was conflicting with another dependency in my project. By downgrading react-native-web and updating other packages, the conflict was resolved and `expo start` began working again.

```javascript
npm install react-native-web@0.18.10
```

Additional steps might be needed depending on the specific error messages found in the logs.  Always check your `package.json` and lock files (like `package-lock.json`) for compatibility issues.