import React, { useState } from 'react';

function Favorites({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {isFavorite && <p>{item.title} has been added to your favorites!</p>}
    </div>
  );
}

export default Favorites;