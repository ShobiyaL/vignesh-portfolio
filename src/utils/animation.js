export const slideIn = (direction, type, delay, duration) => {
  return {
    initial: {
      x: direction === 'left' ? '-50%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    animate: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
// export const containerVariants = (delay = 0) => ({
//   offscreen: {
//     opacity: 0,
//     y: 30,
//   },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       duration: 2,
//       delay,
//     },
//   },
// });
// export const tagVariants = {
//   offscreen: {
//     opacity: 0,
//     y: 10,
//   },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       duration: 2,
//     },
//   },
// };
// export const titleVariants = {
//   offscreen: {
//     opacity: 0,
//     y: 30,
//   },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       duration: 2.2,
//     },
//   },
// };
// export const desVariants = {
//   offscreen: {
//     opacity: 0,
//     y: 20,
//   },
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       duration: 2.6,
//       delay: 0.2,
//     },
//   },
// };
