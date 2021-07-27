export async function checkAspectRatio(file: File) {
  const img = new Image();
  img.src = URL.createObjectURL(file);
  const aspectRatio = await img.decode().then(() => {
    URL.revokeObjectURL(img.src);
    return img.width / img.height;
  });

  return aspectRatio;
}
