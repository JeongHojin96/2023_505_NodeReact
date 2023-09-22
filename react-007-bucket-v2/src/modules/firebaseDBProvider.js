import { firebaseApp } from "../config/firebaseConfig";
import {
  getFirestore,
  collection,
  query,
  where,
  addDoc,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { newBucketDto } from "./bucketDto";

const TBL_BUCKET = "bucket";
const db = getFirestore(firebaseApp);

export const getBucketList = async (search = "") => {
  try {
    let result = "";
    if (search) {
      const queryCollection = query(
        collection(db, TBL_BUCKET, where("bucket" == search))
      );
    } else {
      result = await getDoc(collection(db, TBL_BUCKET));
    }
    const bucketList = result.docs.map((item) => {
      console.log(item.data());
      return { ...item.data() };
    });
    return bucketList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBucket = async (bucketId) => {
  try {
    const result = await getDoc(collection(db, TBL_BUCKET, bucketId));
    return result.data();
  } catch (error) {
    console.log(error);
  }
};

export const newBucket = async () => {
  const newBucket = newBucketDto();
  await saveBucket(newBucket);
  return await getBucket(newBucket.id);
};

export const saveBucket = async (bucket) => {
  try {
    const docRef = await addDoc(collection(db, TBL_BUCKET), {
      ...bucket,
    });
    console.log("Result", docRef);
  } catch (error) {
    console.error(error);
  }
};

// export const updateBucket = async (bucket) => {
//   console.log(bucket);
//   setDoc(doc(db, TBL_BUCKET, bucket.id), { ...bucket });
// };

export const deleteBucket = async (id) => {
  try {
    await deleteBucket(doc(db, TBL_BUCKET, id));
  } catch (error) {
    console.error(error);
  }
};
