//১. Top Players2022 নাম একটা লেখা আছে। অথবা Top Blogs লেখা আছে। এই দুইটাকে দুইটা ID দাও। HTML চেইঞ্জ করে ID সেট করো। তারপর জাভাস্ক্রিপ্ট দিয়েই সেই এলিমেন্ট খুঁজে বের করে তার টেক্সট এর কালার চেইঞ্জ করে ফেলো।
function secTitle(color) {
  document.getElementById("top-" + color).style.color = "green";
}
secTitle("player");
secTitle("blog");
//২. জাভাস্ক্রিপ্ট দিয়ে player ক্লাস এর যতগুলা div আছে সবগুলাকে যেকোন একটা ব্যাকগ্রাউন্ড কালার দাও। তোমার ইচ্ছামতো যেকোন একটা ব্যাকগ্রাউন্ড কালার দিতে হবে। তবে কালারটা hex কালার না দিয়ে। rgba কালার দাও। যদি rgba বুঝতে না পারো। তাহলে গুগলে সার্চ দিয়ে একটা rgba কালার বের করে তারপর সেই কালার দাও।
function playerDiv() {
  let divs = document.querySelectorAll(".players");
  for (div of divs) {
    div.style.background = "rgba(122,88,333,0.1)";
  }
}
playerDiv();
//৩. ওয়েবসাইট এর নিচে একটা ul list যোগ করো। সেখানে তোমার ইচ্ছামতো তিনটা আইটেম যোগ করো। তারপর ul এর নিচে একটা বাটন যোগ করো। এখন তোমার কাজ হবে। বাটনে যতবার ক্লিক করবে। ul এর মধ্যে নতুন একটা লিস্ট আইটেম যোগ হবে।
document.getElementById("ul-btn").addEventListener("click", function () {
  let newList = document.createElement("li");
  newList.innerText = "new list";
  document.getElementById("u-list").appendChild(newList);
});
//৪. এখন ul এর নিচে একটা ইনপুট ফিল্ড আর একটা বাটন যোগ করো। ইনপুট ফিল্ড এ শুরুতে মান হবে শূন্য (০)। তারপর ইনপুট ফিল্ডের পাশের নতুন বাটন এ যতবার প্রেস করবে ততবার এক এক করে ইনপুট ফিল্ড এর মান এক এক করে বাড়বে।
// function increaseNum() {
//   const inputField = document.getElementById("input-field");
//   const inputValue = inputField.value;
//   inputField.value = parseInt(inputValue) + 1;
// }
//৫. (চ্যালেঞ্জিং ওয়ান)উপরে বাটনে দুইটা শর্ত আছে। সেটা হচ্ছে সংখ্যা বাড়লেও সেটা হবে সর্বোচ্চ ৫। অর্থাৎ ০ থেকে এক এক করে বেড়ে বেড়ে পাঁচ পর্যন্ত হতে পারে। তার উপরে আর বাড়বে না। এবং ৫ হয়ে গেলে বাটনটা ডিজেবল হয়ে যাবে।
const btn = document.getElementById("increaseNum");
btn.addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  inputField.value = parseInt(inputValue) + 1;
  if (inputField.value == 5) {
    btn.setAttribute("disabled", "");
  }
});
//প্রজেক্ট চ্যালেঞ্জ 
//৬. শপিং কার্ট এর ডিজাইন দেখো। তারপর নিজে নিজে HTML, CSS (মন চাইলে কোন ফ্রেমওয়ার্ক বুটস্ট্র্যাপ বা টেইলউইন্ড) দিয়ে অথবা css৩ দিয়ে নিজে নিজে সিম্পল সাইট বানিয়ে ফল। 
