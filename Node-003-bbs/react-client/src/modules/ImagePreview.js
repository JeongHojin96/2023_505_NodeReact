const filePreview = (file) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = (fe) => {
      resolve(fe.target.result);
    };
    fileReader.readAsDataURL(file);
  });
};

const filesPreview = (files) => {
  const fileArray = Array.from(files);

  const fileInforArray = fileArray.map(async (file) => {
    return await filePreview(file);
  });
  return fileInforArray;
};

export { filePreview, filesPreview };
