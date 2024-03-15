async function takeScreenshotAndSave() {
  // Call the function to capture the screenshot
  await window.screenshot.captureScreenShot();

  // Set up an event listener to handle the captured screenshot
  window.screenshot.screenShotCaptured((event, dataURL) => {
      // Display the screenshot image
      document.getElementById('screenshot-image').src = dataURL;

      // Create a link element to download the image
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'screenshot.png'; // Set the filename for the downloaded image
      document.body.appendChild(link);

      // Trigger a click event on the link to initiate the download
      link.click();

      // Remove the link element from the DOM
      document.body.removeChild(link);
  });
}

// Attach the takeScreenshotAndSave function to the click event of the screenshot button
document.getElementById('screenshot-button').addEventListener('click', takeScreenshotAndSave);

