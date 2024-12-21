// Iterate through all pages in the Figma document
figma.root.children.forEach(page => {
  // Find all frames with auto-layout enabled
  page.findAll(node => node.type === "FRAME" && node.layoutMode !== "NONE").forEach(frame => {
    // Rename frames based on their layout mode
    if (frame.layoutMode === "HORIZONTAL") {
      frame.name = "flex-row";
    } else if (frame.layoutMode === "VERTICAL") {
      frame.name = "flex-column";
    } else if (frame.layoutWrap === "WRAP") {
      frame.name = "flex-wrap";
    }
  });
});

// Notify the user the plugin has finished running
figma.notify("Auto-layout frames renamed successfully!");

// Close the plugin
figma.closePlugin();
