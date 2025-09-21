// utils/storage.js
import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY; // Ideally store in env file

// Encrypt and store in localStorage
export const setEncryptedItem = (key, value) => {
  try {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      SECRET_KEY
    ).toString();
    localStorage.setItem(key, ciphertext);
  } catch (error) {
    console.error("Error encrypting data:", error);
  }
};

// Decrypt and get from localStorage
export const getDecryptedItem = (key) => {
  try {
    const ciphertext = localStorage.getItem(key);
    if (!ciphertext) return null;

    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error("Error decrypting data:", error);
    return null;
  }
};

// Remove item
export const removeItem = (key) => {
  localStorage.removeItem(key);
};