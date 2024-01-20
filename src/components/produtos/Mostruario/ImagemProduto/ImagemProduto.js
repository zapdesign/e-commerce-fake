import React, { useState } from 'react';

function ImagemProduto({imagem}) {
  const [imagemExiste, setImagemExiste] = useState(null);

  const verificarLinkImagem = (url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setImagemExiste(true);
      console.log(imagemExiste)
    }
    img.onerror = () => {
      setImagemExiste(false);
      console.log(imagemExiste)

    }
  }

  verificarLinkImagem(imagem)

  return (
    <div>
      <p>Verificando existência da imagem...</p>
      {imagemExiste === true && <p>buuu</p>}
      {imagemExiste === false && <p>buuu</p>}
      {}
    </div>
  );
}

export default ImagemProduto