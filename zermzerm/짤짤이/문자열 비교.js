const words = ["apple", "Banana", "apple-pie", "Apple", "banana", "applepie"];

// 기본
words.sort((a, b) => a.localeCompare(b));
// 결과 [  "Apple",  "apple",  "apple-pie",  "applepie",  "Banana",  "banana"]

// 대소문자 및 악센트 모두 무시 (sensitivity: 'base')
words.sort((a, b) => a.localeCompare(b, "en", {sensitivity: "base"}));
// 결과 : ["apple", "Apple", "apple-pie", "applepie", "Banana", "banana"]

// 악센트만 무시하고 대소문자 구분 (sensitivity: 'accent')
words.sort((a, b) => a.localeCompare(b, "en", {sensitivity: "accent"}));
// 결과 : ["Apple", "apple", "apple-pie", "applepie", "Banana", "banana"]

// 대소문자 구분하며 정렬 (sensitivity: 'variant')
words.sort((a, b) => a.localeCompare(b, "en", {sensitivity: "variant"}));
// 결과 : ["Apple", "Banana", "apple", "apple-pie", "applepie", "banana"]
