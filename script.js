document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();

  const generateBtn = document.getElementById("generateBtn");
  const topicInput = document.getElementById("topicInput");
  const titleList = document.getElementById("titleList");
  const descriptionList = document.getElementById("descriptionList");

  const titleTemplates = [
    "{topic} - The Ultimate Guide!",
    "Top 10 Tips for {topic}",
    "{topic} Explained in 5 Minutes",
    "How to Master {topic}",
    "Everything You Need to Know About {topic}",
    "Secrets About {topic} You Didn't Know",
    "Learn {topic} Fast & Easy",
    "{topic}: Tips from the Pros",
    "Beginner's Guide to {topic}",
    "The Complete {topic} Tutorial"
  ];

  const descriptionTemplates = [
    "Learn all about {topic} in this comprehensive video.",
    "Tips, tricks, and strategies for {topic}. Watch now!",
    "Step-by-step guide on {topic} for beginners and pros.",
    "Discover the secrets of {topic} and take your skills to the next level.",
    "This video covers {topic} from A to Z!",
    "Boost your knowledge on {topic} today!",
    "Everything you need to know about {topic} in one video.",
    "Master {topic} with these proven techniques.",
    "The ultimate tutorial on {topic} for all skill levels.",
    "Get expert tips and tricks on {topic}."
  ];

  function getRandomItems(array, n) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  function generateOptimizedContent(topic) {
    titleList.innerHTML = "";
    descriptionList.innerHTML = "";

    const randomTitles = getRandomItems(titleTemplates, 5);
    const randomDescriptions = getRandomItems(descriptionTemplates, 5);

    // Titles
    randomTitles.forEach(template => {
      const li = document.createElement("li");
      const textSpan = document.createElement("span");
      textSpan.textContent = template.replace("{topic}", topic);
      li.appendChild(textSpan);

      const copyBtn = document.createElement("button");
      copyBtn.textContent = "Copy";
      copyBtn.className = "copy-btn";
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(textSpan.textContent);
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy", 1000);
      });

      li.appendChild(copyBtn);
      titleList.appendChild(li);
    });

    // Descriptions
    randomDescriptions.forEach(template => {
      const li = document.createElement("li");
      const textSpan = document.createElement("span");
      textSpan.textContent = template.replace("{topic}", topic);
      li.appendChild(textSpan);

      const copyBtn = document.createElement("button");
      copyBtn.textContent = "Copy";
      copyBtn.className = "copy-btn";
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(textSpan.textContent);
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy", 1000);
      });

      li.appendChild(copyBtn);
      descriptionList.appendChild(li);
    });
  }

  generateBtn.addEventListener("click", () => {
    const topic = topicInput.value.trim();
    if(topic === "") {
      alert("Please enter a video topic!");
      return;
    }
    generateOptimizedContent(topic);
  });
});
