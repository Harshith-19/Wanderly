export const opacityVariants = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const scaleVariants = {
  invisible: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export const bounceVariants = {
  start: {
    rotate: 360,
    x: [600, 0],
    // transition: {
    //   duration: 1,
    // },
  },
};

export const hoverMotion = {
  rest: {
    width: 0,
    backgroundColor: "#5e6282",
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.2,
    },
  },
};
