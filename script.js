
function generateReply() {
  const input = document.getElementById('inputText').value.trim();
  const output = document.getElementById('output');
  if (!input) {
    output.innerText = "Say something to get burned... 🔥";
    return;
  }
  const replies = [
    "Congrats, you just proved evolution can go in reverse.",
    "I'd agree with you, but then we’d both be wrong.",
    "Your secrets are always safe with me. I never even listen when you tell me them.",
    "You have something on your chin... no, the third one down.",
    "You're not stupid; you just have bad luck thinking."
  ];
  const reply = replies[Math.floor(Math.random() * replies.length)];
  output.innerText = reply;
}
