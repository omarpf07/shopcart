import { Injectable } from '@angular/core';
import { Item, Product } from '../beans/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private items: Item[] = [
    {
      name: 'Ropa',
      products: [
        {
          name: 'Franela Aeropostale',
          description: 'Hechas 100% algodon',
          amount: 30,
          picture: 'assets/img/clothes/0.jpeg'
        },
        {
          name: 'Short Adidas',
          description: 'Para esos días de Hard Training',
          amount: 30,
          picture: 'assets/img/clothes/1.jpeg'
        },
        {
          name: 'Jean Levis',
          description: 'El mejor confort y calidad',
          amount: 30,
          picture: 'assets/img/clothes/2.jpeg'
        },
        {
          name: 'Hoodie GAP',
          description: 'Para esos días fríos',
          amount: 30,
          picture: 'assets/img/clothes/3.jpeg'
        }
      ]
    },
    {
      name: 'Zapatos',
      products: [
        {
          name: 'Gomas Adidas',
          description: 'La mejor marca del mundo',
          amount: 30,
          picture: 'assets/img/shoes/0.jpeg'
        },
        {
          name: 'Gomas Nike',
          description: 'Perfectas para el Gimnasio',
          amount: 30,
          picture: 'assets/img/shoes/1.jpeg'
        },
        {
          name: 'Botas Caterpillar',
          description: 'Te benefician con la mejor protección',
          amount: 30,
          picture: 'assets/img/shoes/2.jpeg'
        },
        {
          name: 'Crocs',
          description: 'Para estar en la casa',
          amount: 30,
          picture: 'assets/img/shoes/3.jpeg'
        }
      ]
    },
    {
      name: 'Accesorios',
      products: [
        {
          name: 'Lentes',
          description: 'Distintos tipos de lentes',
          amount: 30,
          picture: 'assets/img/accesories/0.jpeg'
        },
        {
          name: 'Pulseras',
          description: 'Para generar las mejores combinaciones en tu outfit',
          amount: 30,
          picture: 'assets/img/accesories/1.jpeg'
        },
        {
          name: 'Cadenas',
          description: 'Tenemos de oro, bronce, hierro, aluminio',
          amount: 30,
          picture: 'assets/img/accesories/2.jpeg'
        },
        {
          name: 'Gorras',
          description: 'Gorras planas, con tus marcas favoritas',
          amount: 30,
          picture: 'assets/img/accesories/3.jpeg'
        }
      ]
    },
    {
      name: 'Televisores',
      products: [
        {
          name: 'Televisor LG',
          description: 'Para el mejor entretenimiento',
          amount: 30,
          picture: 'assets/img/tv/0.jpeg'
        },
        {
          name: 'Televisor Samsung',
          description: '¡SmartTv a la orden!',
          amount: 30,
          picture: 'assets/img/tv/1.jpeg'
        },
        {
          name: 'Televisor \'Chino\'',
          description: 'Marcas de menor costo y menor calidad',
          amount: 30,
          picture: 'assets/img/tv/2.jpeg'
        },
        {
          name: 'Televisor Sony',
          description: 'Sony, los mejores en audio y video',
          amount: 30,
          picture: 'assets/img/tv/3.jpeg'
        }
      ]
    },
    {
      name: 'Teléfonos Celulares',
      products: [
        {
          name: 'Samsung S9',
          description: 'Captura impresionantes imágenes con luz brillante y con muy poca luz. Nuestra lente de abertura doble con alta definición se adapta como el ojo humano. Es capaz de cambiar automáticamente entre diversas condiciones de iluminación con facilidad, haciendo que tus fotos se vean muy bien ya sea con o sin luz, de día o de noche.',
          amount: 30,
          picture: 'assets/img/cellphones/0.jpeg'
        },
        {
          name: 'Samsung S8',
          description: 'es un hermoso celular resistente al agua con un excelente rendimiento, duración de batería y cámara fotográfica. Además, Samsung Pay es una maravilla, tiene 64GB de almacenamiento base, ranura para tarjeta microSD, carga inalámbrica, lector de iris y el nuevo puerto USB-C.',
          amount: 30,
          picture: 'assets/img/cellphones/1.jpeg'
        },
        {
          name: 'Honor 6X',
          description: '. Hablamos del Honor 6X, un smartphone llamado a conquistar la gama media, y lo hace con argumentos casi obligatorios como el sensor de huellas, el diseño metálico, la cámara doble y, por supuesto, un precio de derribo.',
          amount: 30,
          picture: 'assets/img/cellphones/2.jpeg'
        },
        {
          name: 'Iphone X',
          description: 'Desde un principio nuestro objetivo fue crear un iPhone que fuera todo pantalla. Un dispositivo tan envolvente que prácticamente desapareciera al usarlo. Tan inteligente que respondiera a un toque, a una palabra o a una mirada. Hoy el iPhone X hace realidad ese objetivo. Dile hola al futuro',
          amount: 30,
          picture: 'assets/img/cellphones/3.jpeg'
        }
      ]
    },
    {
      name: 'PC y Laptops',
      products: [
        {
          name: 'Laptop Acer',
          description: 'Rapidez y estabilidad',
          amount: 30,
          picture: 'assets/img/pc/0.jpeg'
        },
        {
          name: 'Laptop HP',
          description: 'La marca lider en componentes de computacion',
          amount: 30,
          picture: 'assets/img/pc/1.jpeg'
        },
        {
          name: 'Laptop Asus',
          description: 'Con sus replicas de las Macbook, realmente lindas',
          amount: 30,
          picture: 'assets/img/pc/2.jpeg'
        },
        {
          name: 'Laptop MSI',
          description: 'Las mejores para el entorno Gaming. Mucho poder.',
          amount: 30,
          picture: 'assets/img/pc/3.jpeg'
        }
      ]
    }
  ];

  constructor() { }


  public getData(): Item[] {
    return this.items;
  }

  public getProduct(s: number, p: number): Product {
    return this.items[s].products[p];
  }

}
