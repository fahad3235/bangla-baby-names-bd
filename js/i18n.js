/* UI chrome translations (names and meanings stay as curated in data.js). */
'use strict';
const I18N = {
  en: {
    tagline: 'Find a beautiful name, with its meaning, in English and Bangla.',
    searchLabel: 'Search names or meanings',
    searchPlaceholder: 'Try "light", "joy", "নূর"...',
    genderLabel: 'Gender', originLabel: 'Origin', sortLabel: 'Sort',
    genderAll: 'All genders', genderBoy: 'Boy', genderGirl: 'Girl', genderUnisex: 'Unisex',
    originAll: 'All origins', sortAZ: 'A to Z', sortZA: 'Z to A',
    favOnly: 'Favourites only', surprise: 'Surprise me',
    results: 'names found', fav: 'favourite', favRemove: 'remove favourite',
    copy: 'Copy', copied: 'Copied!',
    empty: 'No names match. Try a different search or clear a filter.',
    clearFilters: 'Clear filters',
    detailTitle: 'Name details', close: 'Close',
    meaningLabel: 'Meaning', originLabel2: 'Origin', genderLabel2: 'Gender',
    disclaimer: 'Meanings are commonly given meanings and vary by source; Bangla spellings are common transliterations. This is a browsing reference, not religious or official authority.',
    footer: 'Fully offline — no data leaves your device. Favourites are saved in this browser only.',
    langBtn: 'বাংলা',
  },
  bn: {
    tagline: 'অর্থসহ সুন্দর নাম খুঁজুন — ইংরেজি ও বাংলায়।',
    searchLabel: 'নাম বা অর্থ খুঁজুন',
    searchPlaceholder: '"light", "joy", "নূর" লিখে দেখুন...',
    genderLabel: 'লিঙ্গ', originLabel: 'উৎস', sortLabel: 'সাজান',
    genderAll: 'সব লিঙ্গ', genderBoy: 'ছেলে', genderGirl: 'মেয়ে', genderUnisex: 'উভয়',
    originAll: 'সব উৎস', sortAZ: 'অ থেকে হ', sortZA: 'হ থেকে অ',
    favOnly: 'শুধু পছন্দের নাম', surprise: 'এলোমেলো নাম',
    results: 'টি নাম পাওয়া গেছে', fav: 'পছন্দের তালিকায় রাখুন', favRemove: 'পছন্দ থেকে সরান',
    copy: 'কপি করুন', copied: 'কপি হয়েছে!',
    empty: 'কোনো নাম মেলেনি। অন্য কিছু লিখে বা ফিল্টার বদলে আবার চেষ্টা করুন।',
    clearFilters: 'ফিল্টার মুছুন',
    detailTitle: 'নামের বিস্তারিত', close: 'বন্ধ করুন',
    meaningLabel: 'অর্থ', originLabel2: 'উৎস', genderLabel2: 'লিঙ্গ',
    disclaimer: 'অর্থগুলো প্রচলিত অর্থ; উৎসভেদে ভিন্ন হতে পারে। বাংলা বানান প্রচলিত রূপ। এটি শুধু দেখার জন্য একটি রেফারেন্স, ধর্মীয় বা সরকারি কর্তৃপক্ষ নয়।',
    footer: 'সম্পূর্ণ অফলাইন — আপনার তথ্য ডিভাইসের বাইরে যায় না। পছন্দের নাম শুধু এই ব্রাউজারে সংরক্ষিত হয়।',
    langBtn: 'English',
  },
};
const ORIGIN_LABEL = { Arabic: 'Arabic', Persian: 'Persian', Sanskrit: 'Sanskrit', Bangla: 'Bangla' };
const ORIGIN_LABEL_BN = { Arabic: 'আরবি', Persian: 'ফারসি', Sanskrit: 'সংস্কৃত', Bangla: 'বাংলা' };
const GENDER_LABEL_BN = { boy: 'ছেলে', girl: 'মেয়ে', unisex: 'উভয়' };
if (typeof module !== 'undefined' && module.exports) module.exports = { I18N: I18N };
