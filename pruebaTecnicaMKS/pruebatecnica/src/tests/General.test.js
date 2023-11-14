import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import General from './ruta-de-tu-componente/General';


const mockApiResponse = {
  products: [
    [
        {
          "id": 8,
          "name": "Headset Cloud Stinger",
          "brand": "HyperX",
          "description": "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
          "price": "600.00",
          "createdAt": "2023-10-30T16:25:01.093Z",
          "updatedAt": "2023-10-30T16:25:01.093Z"
        },
        {
          "id": 7,
          "name": "Headset Cloud Revolver",
          "brand": "HyperX",
          "description": "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
          "price": "1000.00",
          "createdAt": "2023-10-30T16:25:01.093Z",
          "updatedAt": "2023-10-30T16:25:01.093Z"
        },
        {
          "id": 6,
          "name": "iPad",
          "brand": "Apple",
          "description": "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
          "price": "4200.00",
          "createdAt": "2023-10-30T16:25:01.093Z",
          "updatedAt": "2023-10-30T16:25:01.093Z"
        },
        {
          "id": 5,
          "name": "Apple Watch Series 7",
          "brand": "Apple",
          "description": "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
          "price": "3200.00",
          "createdAt": "2023-10-30T16:25:01.093Z",
          "updatedAt": "2023-10-30T16:25:01.093Z"
        },
        {
          "id": 4,
          "name": "iPhone 12 64 GB",
          "brand": "Apple",
          "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp",
          "price": "6500.00",
          "createdAt": "2023-10-30T16:25:01.093Z",
          "updatedAt": "2023-10-30T16:25:01.093Z"
        },
        {
          "id": 3,
          "name": "Macbook Air",
          "brand": "Apple",
          "description": "Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp",
          "price": "8200.00",
          "createdAt": "2023-10-30T16:25:01.093Z",
          "updatedAt": "2023-10-30T16:25:01.093Z"
        },
        {
          "id": 2,
          "name": "AirPods",
          "brand": "Apple",
          "description": "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
          "price": "1200.00",
          "createdAt": "2023-10-30T16:25:01.093Z",
          "updatedAt": "2023-10-30T16:25:01.093Z"
        },
        {
          "id": 1,
          "name": "Iphone 11 128 GB",
          "brand": "Apple",
          "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
          "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
          "price": "5000.00",
          "createdAt": "2023-10-30T16:25:01.093Z",
          "updatedAt": "2023-10-30T16:25:01.093Z"
        }
      ]
  ],
};

// Mock de la función useQuery para simular la respuesta de la consulta
jest.mock('react-query', () => ({
  useQuery: jest.fn(() => ({
    data: mockApiResponse,
    isLoading: false,
    isError: false,
  })),
}));

describe('General Component', () => {
  it('renders loading message while fetching products', () => {
    // Configuración de useQuery para simular carga
    jest.spyOn(require('react-query'), 'useQuery').mockImplementationOnce(() => ({
      isLoading: true,
    }));

    render(<General />);

    // Verifica que se renderice el mensaje de carga
    expect(screen.getByText('Carregando')).toBeInTheDocument();
  });

  it('renders products when data is available', () => {
    render(<General />);

    // Verifica que se rendericen los productos (puedes ajustar según tu contenido)
    expect(screen.getByText('Nombre del Producto 1')).toBeInTheDocument();
    expect(screen.getByText('Nombre del Producto 2')).toBeInTheDocument();
    // ... agrega más expectativas según tu contenido
  });

  it('handles adding products to the cart', () => {
    render(<General />);

    // Simula hacer clic en el botón de compra
    fireEvent.click(screen.getByText('COMPRAR'));

    // Verifica que la cantidad en el carrito se actualice
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
  });
});