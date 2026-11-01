/* Bangla Baby Names BD — curated name dataset (48 names).
 * Meanings are the commonly given meanings for each name; they vary by
 * source and family tradition. Bangla spellings are common transliterations.
 * No name, meaning, or spelling here is presented as official or religious
 * authority — this is a reference tool for parents browsing ideas.
 * Fields: en (Latin spelling), bn (Bangla spelling), gender, origin,
 * meaning (English; the UI translates chrome, not meanings, so meanings
 * stay identical in both languages).
 */
'use strict';
const NAMES = [
  // Boys
  { en: 'Arif', bn: 'আরিফ', gender: 'boy', origin: 'Arabic', meaning: 'Knowledgeable, wise' },
  { en: 'Rafid', bn: 'রাফিদ', gender: 'boy', origin: 'Arabic', meaning: 'Supporter, helper' },
  { en: 'Tanvir', bn: 'তানভীর', gender: 'boy', origin: 'Arabic', meaning: 'Enlightenment, illumination' },
  { en: 'Nabil', bn: 'নাবিল', gender: 'boy', origin: 'Arabic', meaning: 'Noble, honourable' },
  { en: 'Farhan', bn: 'ফারহান', gender: 'boy', origin: 'Arabic', meaning: 'Joyful, happy' },
  { en: 'Imran', bn: 'ইমরান', gender: 'boy', origin: 'Arabic', meaning: 'Prosperity' },
  { en: 'Sakib', bn: 'সাকিব', gender: 'boy', origin: 'Arabic', meaning: 'Shining, radiant' },
  { en: 'Rafi', bn: 'রাফি', gender: 'boy', origin: 'Arabic', meaning: 'Exalted, high' },
  { en: 'Adnan', bn: 'আদনান', gender: 'boy', origin: 'Arabic', meaning: 'Settler, dweller in paradise' },
  { en: 'Tahsin', bn: 'তাহসিন', gender: 'boy', origin: 'Arabic', meaning: 'Beautification, improvement' },
  { en: 'Riyad', bn: 'রিয়াদ', gender: 'boy', origin: 'Arabic', meaning: 'Gardens, meadows' },
  { en: 'Fahim', bn: 'ফাহিম', gender: 'boy', origin: 'Arabic', meaning: 'Intelligent, understanding' },
  { en: 'Shadman', bn: 'শাদমান', gender: 'boy', origin: 'Persian', meaning: 'Happy, cheerful' },
  { en: 'Anik', bn: 'অনিক', gender: 'boy', origin: 'Sanskrit', meaning: 'Army, soldier' },
  { en: 'Rifat', bn: 'রিফাত', gender: 'boy', origin: 'Arabic', meaning: 'High rank, elevation' },
  { en: 'Mahir', bn: 'মাহির', gender: 'boy', origin: 'Arabic', meaning: 'Skilled, expert' },
  { en: 'Arman', bn: 'আরমান', gender: 'boy', origin: 'Persian', meaning: 'Wish, desire' },
  { en: 'Rohan', bn: 'রোহান', gender: 'boy', origin: 'Sanskrit', meaning: 'Ascending, rising' },
  { en: 'Kabir', bn: 'কবির', gender: 'boy', origin: 'Arabic', meaning: 'Great, large' },
  { en: 'Shuvo', bn: 'শুভ', gender: 'boy', origin: 'Bangla', meaning: 'Auspicious, good' },
  // Girls
  { en: 'Ayesha', bn: 'আয়েশা', gender: 'girl', origin: 'Arabic', meaning: 'Alive, living' },
  { en: 'Nusrat', bn: 'নুসরাত', gender: 'girl', origin: 'Arabic', meaning: 'Help, victory' },
  { en: 'Tasnim', bn: 'তাসনিম', gender: 'girl', origin: 'Arabic', meaning: 'A fountain in paradise' },
  { en: 'Farhana', bn: 'ফারহানা', gender: 'girl', origin: 'Arabic', meaning: 'Happy, joyful' },
  { en: 'Sumaiya', bn: 'সুমাইয়া', gender: 'girl', origin: 'Arabic', meaning: 'High, exalted' },
  { en: 'Jannat', bn: 'জান্নাত', gender: 'girl', origin: 'Arabic', meaning: 'Paradise, garden' },
  { en: 'Anika', bn: 'অনিকা', gender: 'girl', origin: 'Sanskrit', meaning: 'Graceful, sweet-faced' },
  { en: 'Riya', bn: 'রিয়া', gender: 'girl', origin: 'Sanskrit', meaning: 'Melody, singer' },
  { en: 'Sadia', bn: 'সাদিয়া', gender: 'girl', origin: 'Arabic', meaning: 'Fortunate, lucky' },
  { en: 'Lamia', bn: 'লামিয়া', gender: 'girl', origin: 'Arabic', meaning: 'Shining, radiant' },
  { en: 'Tania', bn: 'তানিয়া', gender: 'girl', origin: 'Persian', meaning: 'Fairy queen' },
  { en: 'Priya', bn: 'প্রিয়া', gender: 'girl', origin: 'Sanskrit', meaning: 'Beloved, dear' },
  { en: 'Ananya', bn: 'অনন্যা', gender: 'girl', origin: 'Sanskrit', meaning: 'Unique, incomparable' },
  { en: 'Diya', bn: 'দিয়া', gender: 'girl', origin: 'Bangla', meaning: 'Lamp, light' },
  { en: 'Maya', bn: 'মায়া', gender: 'girl', origin: 'Sanskrit', meaning: 'Love, affection' },
  { en: 'Nadia', bn: 'নাদিয়া', gender: 'girl', origin: 'Arabic', meaning: 'Hope' },
  { en: 'Zara', bn: 'জারা', gender: 'girl', origin: 'Arabic', meaning: 'Blossom, flower' },
  { en: 'Hiya', bn: 'হিয়া', gender: 'girl', origin: 'Bangla', meaning: 'Heart' },
  { en: 'Ira', bn: 'ইরা', gender: 'girl', origin: 'Sanskrit', meaning: 'Earth' },
  { en: 'Raisa', bn: 'রাইসা', gender: 'girl', origin: 'Arabic', meaning: 'Leader, chief' },
  // Unisex (used for both boys and girls in Bangladesh / South Asia)
  { en: 'Noor', bn: 'নূর', gender: 'unisex', origin: 'Arabic', meaning: 'Light' },
  { en: 'Rumi', bn: 'রুমি', gender: 'unisex', origin: 'Persian', meaning: 'Of Rome; after the poet Rumi' },
  { en: 'Shams', bn: 'শামস', gender: 'unisex', origin: 'Arabic', meaning: 'Sun' },
  { en: 'Saba', bn: 'সাবা', gender: 'unisex', origin: 'Arabic', meaning: 'Morning breeze' },
  { en: 'Amal', bn: 'আমাল', gender: 'unisex', origin: 'Arabic', meaning: 'Hope, aspiration' },
  { en: 'Iman', bn: 'ঈমান', gender: 'unisex', origin: 'Arabic', meaning: 'Faith' },
  { en: 'Rabi', bn: 'রবি', gender: 'unisex', origin: 'Arabic', meaning: 'Spring' },
  { en: 'Anan', bn: 'আনান', gender: 'unisex', origin: 'Arabic', meaning: 'Cloud' },
];
if (typeof module !== 'undefined' && module.exports) module.exports = { NAMES };
