export const formatGallery = gallery => gallery.reduce((acc, ph) => [
  ...acc,
  {
    fluid: ph.fluid,
    caption: ph.title,
    alt: ph.title,
    src: ph.fluid.src,
    width: ph.file.details.image.width/100,
    height: ph.file.details.image.height/110
  }
], [])
