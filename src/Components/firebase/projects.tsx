import { ref, set } from "firebase/database";
import { initDB } from "../../../utils/firebase";
import { FormData } from "../types/FormData";

function writeUserData(data: FormData) {
  let db = initDB();
  if (db) {
    set(ref(db, "users/" + (data.first + data.last).toLowerCase()), data);
  }
}

export const Projects = (data: FormData) => {
  console.log(data);
  writeUserData(data);
};
