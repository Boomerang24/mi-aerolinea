import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../components/firebase/firebase-config";

export const loadCities = async () => {
  const citiesSnap = await getDocs(
    query(collection(db, "/mi-aerolinea/flights/cities"))
  );
  const storeCities: { id: string }[] = [];

  citiesSnap.forEach((snapCity) => {
    storeCities.push({
      id: snapCity.id,
      ...snapCity.data(),
    });
  });

  return storeCities;
};
