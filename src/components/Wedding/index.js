import { useContext, useState } from 'react';
import { WeddingContext } from '../../Providers/Wedding';
import { Title, WeddingStyle } from './style';

const Wedding = () => {
  const { weddingList, removeFromWedding } = useContext(WeddingContext);

  return (
    <div>
      <Title>Wedding drinks list</Title>
      <WeddingStyle>
        {weddingList.map((item) => (
          <li key={item.id}>
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>Brewed since: {item.first_brewed}</p>
            <span>{item.description}</span>
            <span className="quantity">Quantity: {item.volume.value}</span>
            <button onClick={() => removeFromWedding(item)}>Remove item</button>
          </li>
        ))}
      </WeddingStyle>
    </div>
  );
};

export default Wedding;
