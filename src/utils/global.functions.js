export function getCaratPosition(carat) {
  // Define the meter width and carat ranges.
  const meterWidth = 100;
  const caratRanges = [
    [0, 0.5],
    [0.5, 1],
    [1, 1.5],
    [1.5, 2],
    [2, 2.5],
    [2.5, 3],
  ];

  // Find the carat range that the input carat falls into.
  for (const range of caratRanges) {
    const [start, end] = range;
    if (carat >= start && carat <= end) {
      // Calculate the position within the current carat range.
      const position = ((carat - start) / (end - start)) * meterWidth;

      // Adjust position for smaller screens if needed.
      if (meterWidth < 485) {
        return position + 8;
      } else {
        return position;
      }
    }
  }
}

export function backToTopScreen() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });
}
