import localforage from "localforage";
import uuid from "react-uuid";
import moment from "moment";

export const LOCAL_DB = "BUCKET_LIST";

export const newBucketDto = () => {
  const bucketDto = {
    id: uuid(),
    img_src: "",
    sdate: moment().format("YY[/]MM[/]DD"),
    stime: moment().format("HH:mm:ss"),
    bucket: "새로운  Bucket",
    complete: false,
  };
  return bucketDto;
};

export const getBucketList = async () => {
  const bucketList = await localforage.getItem(LOCAL_DB);
  if (!bucketList) {
    const bucketDto = newBucketDto();
    await setBucketList([bucketDto]);
    return [bucketDto];
  }
  return bucketList;
};

export const getBucket = async (id) => {
  const bucketList = await localforage.getItem(LOCAL_DB);
  const bucket = bucketList.find((item) => item.id == id);
  return bucket ?? null;
};

export const newBucket = async () => {
  const bucketDto = newBucketDto();
  const bucketList = await getBucketList();
  bucketList.unshift(bucketDto);
  await setBucketList(bucketList);
  return bucketDto;
};

export const setBucketList = async (bucketList) => {
  return await localforage.setItem(LOCAL_DB, bucketList);
};
