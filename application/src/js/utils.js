export const defaultWebcamFrameSettings = () => ({
    "factor": 1,
    "aspectRatio": "16x9",
    'rotation': 0,
    'borderRadius': 10,
    'color1': '#77b0f2ff'
});

export function generateWebcamFrame(settings) {
    if(!settings) return;
    const canvas = document.getElementById('webcamCanvas');
    if (!canvas) return;
    
    // Ensure canvas dimensions are properly set based on its container
    const container = canvas.parentElement;
    if (container && container.id === 'group') {
        canvas.width = 600;
        canvas.height = 600;
    } else {
        canvas.width = window.innerWidth || 800;
        canvas.height = window.innerHeight || 600;
    }
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const factor = settings && (settings["factor"] !== undefined && settings["factor"] !== null) ? settings["factor"] : defaultWebcamFrameSettings()["factor"];

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);
    
    // Get rotation from settings (0-360 degrees)
    const rotation = settings && (settings["rotation"] !== undefined && settings["rotation"] !== null) ? settings["rotation"] : defaultWebcamFrameSettings()["rotation"];
    
    // Get border radius from settings
    const borderRadius = settings && (settings["borderRadius"] !== undefined && settings["borderRadius"] !== null) ? settings["borderRadius"] : defaultWebcamFrameSettings()["borderRadius"];
    
    // Get color1 from settings
    const color1 = settings && (settings["color1"] !== undefined && settings["color1"] !== null) ? settings["color1"] : defaultWebcamFrameSettings()["color1"];
    
    // Draw the red rotated square with rounded corners
    drawRotatedRoundedSquare(ctx, width / 2, height / 2, 100, borderRadius, rotation, color1);
}

function drawRotatedRoundedSquare(ctx, centerX, centerY, size, borderRadius, rotationDegrees = 0, color = '#ff0000') {
    ctx.save();
    
    // Move to center and rotate by the specified degrees
    ctx.translate(centerX, centerY);
    ctx.rotate((rotationDegrees * Math.PI) / 180); // Convert degrees to radians
    
    // Set fill color from parameter
    ctx.fillStyle = color;
    
    // Draw rounded rectangle centered at origin
    const halfSize = size / 2;
    
    ctx.beginPath();
    ctx.roundRect(-halfSize, -halfSize, size, size, borderRadius);
    ctx.fill();
    
    ctx.restore();
}

