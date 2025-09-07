const target = "https://raw.githubusercontent.com/KioaMatsuyama/MyProject0643/refs/heads/main/output2.mp4";
$done({
  status: 307,
  headers: { "Location": target }
});