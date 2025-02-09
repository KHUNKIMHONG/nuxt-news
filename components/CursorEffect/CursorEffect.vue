<template>
    <div>
        <div class="cursor" :style="{
            top: cursorPosition.y + 'px',
            left: cursorPosition.x + 'px',
            width: cursorSize + 'px',
            height: cursorSize + 'px'
        }">
        </div>
        <div class="cursor-trail" :style="{
            top: cursorTrailPosition.y + 'px',
            left: cursorTrailPosition.x + 'px',
            width: cursorSize + 'px',
            height: cursorSize + 'px'
        }">
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  data() {
    return {
      cursorPosition: { x: 0, y: 0 },
      cursorTrailPosition: { x: 0, y: 0 },
      cursorSize: 20, // Size of the main cursor
      cursorTrailSize:20, // Size of the cursor trail, larger than the main cursor
    };
  },
  mounted() {
    // Track mouse movement
    window.addEventListener('mousemove', this.updateCursorPosition);

    // Track mouse hover on clickable elements
    window.addEventListener('mouseover', this.handleMouseOver);
    window.addEventListener('mouseout', this.handleMouseOut);

    // Animate the cursor trail
    this.animateCursorTrail();
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.updateCursorPosition);
    window.removeEventListener('mouseover', this.handleMouseOver);
    window.removeEventListener('mouseout', this.handleMouseOut);
  },
  methods: {
    updateCursorPosition(event) {
      this.cursorPosition.x = event.clientX;
      this.cursorPosition.y = event.clientY;
    },
    handleMouseOver(event) {
      if (event.target.closest('a, button, input, textarea, select')) {
        this.cursorSize = 10; // Increase cursor size when hovering over clickable elements
        this.cursorTrailSize = 20; // Increase trail size as well
      }
    },
    handleMouseOut() {
      this.cursorSize = 10; // Reset cursor size when not hovering over clickable elements
      this.cursorTrailSize = 20; // Reset trail size as well
    },
    animateCursorTrail() {
      const trailSpeed = 0.15; // Adjust speed of the cursor trail

      const animate = () => {
        this.cursorTrailPosition.x += (this.cursorPosition.x - this.cursorTrailPosition.x) * trailSpeed;
        this.cursorTrailPosition.y += (this.cursorPosition.y - this.cursorTrailPosition.y) * trailSpeed;

        requestAnimationFrame(animate);
      };

      animate();
    },
  },
};
</script>


<style scoped>
.cursor {
    position: fixed;
    background-color: rgba(178, 152, 0, 0.5);
    /* Deep blue color */
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: width 0.15s, height 0.15s, transform 0.15s;
    /* Smooth transition for size and position */
    z-index: 9999;
    /* Ensures it's above other content */
}

.cursor-trail {
    position: fixed;
    background-color: rgba(178, 152, 0, 0.5);
    /* Lighter blue for the trail */
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(151, 66, 1, 0.5);
    /* Subtle shadow effect */
    transition: width 0.15s, height 0.15s, top 0.15s, left 0.15s;
    /* Smooth transition for size and position */
    z-index: 9998;
    /* Ensures it's below the main cursor */
}

.cursor:hover {
    transform: translate(-50%, -50%) scale(1.2);
    /* Scale up on hover */
}
</style>
