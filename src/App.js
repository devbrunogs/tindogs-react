import axios from "axios";
import { useEffect, useState } from "react";
import ActionWrapper from "./components/ActionWrapper";

import Picture from "./components/Picture";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [currentDog, setCurrentDog] = useState(null);
  const [likedDogsList, setLikeDogsList] = useState(JSON.parse(localStorage.getItem('likedDogsList')) || []);
  const [dislikedDogsList, setDislikeDogsList] = useState(JSON.parse(localStorage.getItem('dislikedDogsList')) || []);

  function hasDogInteractedBefore(dog) {
    return likedDogsList.includes(dog) || dislikedDogsList.includes(dog);
  }

  function searchNewDog() {
    setLoading(true);
    setCurrentDog(null);
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(({ data }) => {
        if (data.status === 'success' && !hasDogInteractedBefore(data.message)) {
          setCurrentDog(data.message)
          setLoading(false);
        } else {
          searchNewDog();
        }
      })
      .catch(e => console.log);
  }

  function likeDog() {
    const modifiedList = [...likedDogsList];
    modifiedList.push(currentDog);
    localStorage.setItem('likedDogList', JSON.stringify(modifiedList))
    setLikeDogsList(modifiedList);
  }

  function dislikeDog() {
    const modifiedList = [...dislikedDogsList];
    modifiedList.push(currentDog);
    localStorage.setItem('dislikedDogsList', JSON.stringify(modifiedList))
    setDislikeDogsList(modifiedList);
  }

  useEffect(() => {
    searchNewDog();
  }, [likedDogsList, dislikedDogsList]);

  return (
    <div className="flex flex-col justify-center gap-5 align-middle">
      <h3 className="text-center">My fav Dogs</h3>
      <Picture src={currentDog} isLoading={isLoading} />
      <ActionWrapper
        refreshAction={searchNewDog}
        likeAction={likeDog}
        dislikeAction={dislikeDog}
        disabled={isLoading}
      />
    </div>
  );
}

export default App;
