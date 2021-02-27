import React, { useCallback, useEffect, useState } from 'react';

import one from '../../assets/01.jpg';
import two from '../../assets/02.jpg';
import three from '../../assets/03.jpg';
import d from '../../assets/icons/level-up.svg';
import { Container, ContainerImage, ButtonImage } from './styles';

interface IImage {
  url: string;
  name: string;
}

const ImageTop: React.FC = () => {
  const images = [
    { url: one, name: 'Blusa' },
    { url: two, name: 'Camissa' },
    { url: three, name: 'Roupa íntima' },
  ];

  const [imageSelected, setImageSelected] = useState<IImage>({} as IImage);

  useEffect(() => {
    setImageSelected(images[0]);
  }, []);

  const upDataImageSelected = useCallback(
    (image) => {
      setImageSelected(image);
    },
    [setImageSelected],
  );

  return (
    <Container>
      <header>
        <h1>Camisola</h1>
      </header>
      <div>
        <ContainerImage url={imageSelected.url}>
          <img src={imageSelected.url} alt={imageSelected.name} />
        </ContainerImage>
        <section>
          {images.map((image) => {
            return (
              <ButtonImage
                type="button"
                url={image.url}
                onClick={() => upDataImageSelected(image)}
                key={image.url}
              >
                <img src={d} alt="Level Up" />
              </ButtonImage>
            );
          })}
        </section>
      </div>
    </Container>
  );
};

export default ImageTop;
