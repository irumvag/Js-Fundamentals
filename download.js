fetch("blob:https://talent.shixizhi.huawei.com/7dcdec4f-6ad8-4b5a-a67d-3432f5667745")
  .then(response => response.blob())
  .then(blob => {
    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a hidden download link
    const a = document.createElement("a");
    a.href = url;
    a.download = "image.png"; // filename on the user's computer
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  })
  .catch(err => console.error(err));
