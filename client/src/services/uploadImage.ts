export const uploadImage = async (
  image: File,
  setUploadingImg: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "123456 ");
  try {
    setUploadingImg(true);
    let res = await fetch(
      `https://api.cloudinary.com/v1_1/${username}/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const urlData = await res.json();
    setUploadingImg(false);
    return urlData.url;
  } catch (error) {
    setUploadingImg(false);
    console.log(error);
  }
};
