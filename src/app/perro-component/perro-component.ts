import { Component, signal, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface DogResponse {
  message: string;
  status: string;
}

interface Perrito {
  id: number;
  nombre: string;
  raza: string;
  edad: string;
  descripcion: string;
  imagen: string;
  adoptado: boolean;
}

@Component({
  selector: 'app-perro-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perro-component.html',
  styleUrl: './perro-component.css',
})
export class PerroComponent implements OnInit {
  private http = inject(HttpClient);

  perritos = signal<Perrito[]>([]);
  perritorSeleccionado = signal<Perrito | null>(null);
  cargando = signal<boolean>(false);

  // Datos de los perritos
  private datosPerritos = [
    { nombre: 'Roddy',    raza: 'Chihuahua',         edad: '2 años',    descripcion: 'Le encanta jugar con pelotas y es muy cariñoso con los niños.' },
    { nombre: 'Luna',   raza: 'Golden Retriever',  edad: '1 año',     descripcion: 'Muy juguetona y activa. Ideal para familias con espacio.' },
    { nombre: 'Jolibert',  raza: 'Vira lata',           edad: '3 años',    descripcion: 'Tranquilo y leal. Perfecto para apartamentos.' },
    { nombre: 'Bella',  raza: 'Beagle',            edad: '4 años',    descripcion: 'Curiosa y amigable. Se lleva bien con otros perros.' },
    { nombre: 'Toby',   raza: 'Poodle',            edad: '2 años',    descripcion: 'Inteligente y fácil de entrenar. Hipoalergénico.' },
    { nombre: 'Coco',   raza: 'Dálmata',           edad: '5 años',    descripcion: 'Enérgico y divertido. Necesita bastante ejercicio.' },
  ];

  ngOnInit() {
    this.cargarPerritos();
  }

  // Aqui cargo los datos de los perritos y hago la peticion a la API para obtener las imagenes
  cargarPerritos() {
    this.cargando.set(true);
    const peticiones = this.datosPerritos.map((datos, i) =>
      this.http.get<DogResponse>('https://dog.ceo/api/breeds/image/random').toPromise().then(res => ({
        id: i + 1,
        nombre: datos.nombre,
        raza: datos.raza,
        edad: datos.edad,
        descripcion: datos.descripcion,
        imagen: res?.message || '',
        adoptado: false,
      } as Perrito))
    );

    Promise.all(peticiones).then(perritos => {
      this.perritos.set(perritos);
      this.cargando.set(false);
    });
  }

  verDetalle(perrito: Perrito) {
    this.perritorSeleccionado.set(perrito);
  }

  cerrarDetalle() {
    this.perritorSeleccionado.set(null);
  }

  adoptar(id: number) {
    this.perritos.update(lista =>
      lista.map(p => p.id === id ? { ...p, adoptado: true } : p)
    );
    this.cerrarDetalle();
  }
}

