import { ref, set } from "firebase/database";
import { db } from "../../../utils/firebase";
import { FormData } from "../types/FormData";

function writeUserData(data: FormData) {
  if (db) {
    set(ref(db, "users/" + (data.first + data.last).toLowerCase()), data);
  }
}

export const Projects = (data: FormData) => {
  console.log(data);
  writeUserData(data);
};
