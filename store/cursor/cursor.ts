import { defineStore } from 'pinia';

export const useCursorStore = defineStore('cursor', {
  state: () => ({
    x: 0,
    y: 0,
    isHovering: false,
  }),
  actions: {
    updateCursorPosition(x: number, y: number) {
      this.x = x;
      this.y = y;
    },
    setHoverState(isHovering: boolean) {
      this.isHovering = isHovering;
    },
  },
});

