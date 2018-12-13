export const formatGallery = gallery => gallery.reduce((acc, ph) => [
  ...acc,
  {
    fluid: ph.fluid,
    caption: ph.title,
    src: ph.fluid.src,
    srcSet: ph.fluid.srcSet,
    width: ph.file.details.image.width/100,
    height: ph.file.details.image.height/110
  }
], [])
